<?php 

require_once __DIR__ . '/../../vendor/autoload.php';


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();





use GuzzleHttp\Client as GuzzleClient;
use Microcms\Client as MicrocmsClient;




	// Guzzle HTTPクライアントのインスタンスを作成し、SSL検証を無視する設定
$guzzleClient = new GuzzleClient([
    'verify' => false // SSL証明書の検証を無視
]);

// MicroCMSクライアントのインスタンスを作成
$microcmsClient = new MicrocmsClient(
    $_ENV['MICROCMS_DOMAIN'],  // サービスドメイン
    $_ENV['MICROCMS_API_KEY'], // APIキー
    $guzzleClient              // カスタムGuzzleクライアントを使用
);

// 特定のエンドポイントからデータを取得
$response = $microcmsClient->list("chatbot");


	// file_put_contents('../../log/return.log',json_encode($response));



$jsonData = json_encode($response);
$data = json_decode($jsonData, true);

$embeddings = [];

// コンテンツのEmbeddingを取得
foreach ($data['contents'] as $content) {
    try {
        $response = $openaiClient->embeddings()->create([
            'model' => 'text-embedding-3-small',
            'input' => $content['content']
        ]);

        if (isset($response['data']['embeddings'][0])) {
            $embeddings[$content['id']] = $response['data']['embeddings'][0]['embedding'];
        }
    } catch (\Exception $e) {
        // エラーハンドリング: エラーをログに記録
        error_log('Error embedding content: ' . $e->getMessage());
    }
}

// Embedding結果をログファイルに保存
file_put_contents('../../log/error.log', json_encode($embeddings));










function openai($user_question){

	$yourApiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found';

	$client = OpenAI::client($yourApiKey);

// 社内データの配列
	$texts = [
		"次の全体会議は来週の月曜日",
		"重要なセキュリティ更新がありますので、すぐにシステム更新を行ってください。",
		"新しい社内イベントのスケジュールが公開されました。",
		"年末の業務報告書の提出期限について"
	];

// ユーザーの質問を受け取る
// $user_question = "明日の天気はなんですか？";

// 質問のEmbeddingsを取得
	$response = $client->embeddings()->create([
		'model' => 'text-embedding-3-small',
		'input' => $user_question
	]);
	$question_embedding = $response->embeddings[0]->embedding;

// 社内データと比較して最も類似したテキストを見つける
	$best_score = 0;
	$best_match = "";
	foreach ($texts as $text) {
		$response = $client->embeddings()->create([
			'model' => 'text-embedding-3-small',
			'input' => $text
		]);
		$text_embedding = $response->embeddings[0]->embedding;

		$dotProduct = 0;
		$normA = 0;
		$normB = 0;
		for ($i = 0; $i < count($question_embedding); $i++) {
			$dotProduct += $question_embedding[$i] * $text_embedding[$i];
			$normA += pow($question_embedding[$i], 2);
			$normB += pow($text_embedding[$i], 2);
		}
		$normA = sqrt($normA);
		$normB = sqrt($normB);
		$cosineSimilarity = $dotProduct / ($normA * $normB);

		if ($cosineSimilarity > $best_score) {
			$best_score = $cosineSimilarity;
			$best_match = $text;
		}
	}
	file_put_contents('../../log/return.log',$best_match);

    // GPTを使って適切な形で情報を成形する
	if ($best_score < 0.5) {
		$system_message = "ユーザーからの質問に対して関連する社内データが見つかりませんでした。その旨を正直に答えてください。";

        // 社内データに関連がない場合のメッセージをGPTに伝える
		$gpt_response = $client->chat()->create([
			'model' => 'gpt-3.5-turbo',
			'messages' => [
				['role' => 'system', 'content' => $system_message ],
				['role' => 'user', 'content' => $user_question]
			],
		]);
	} else {
		$system_message = "以下の質問に基づいて、最適な回答を生成してください。質問と関連する情報も提供します。";
        // 社内データに関連する情報をGPTに伝える
		$gpt_response = $client->chat()->create([
			'model' => 'gpt-3.5-turbo',
			'messages' => [
				['role' => 'system', 'content' => $system_message . "■関連性の高い情報：" . $best_match],
				['role' => 'user', 'content' => $user_question],
			],
		]);
	}

    // GPTモデルの成形した回答を取得
	$gpt_answer = $gpt_response->choices[0]->message->content;

	return "Adjusted answer: " . $gpt_answer . "\n";



}



$text = isset($_GET['text']) ? filter_var($_GET['text'], FILTER_SANITIZE_STRING) : '';


$user_question = "次の会議はいつ？";


$callback = isset($_GET['callback']) ? filter_var($_GET['callback'], FILTER_SANITIZE_STRING) : '';

$output = "aaa";
// $output = openai($text);
$response = [
	'output' => [
		[
			'type' => 'text',
			'value' => trim($output)
		]
	]
];

        // JSONP形式で応答する場合
if ($callback) {
	echo $callback . '(' . json_encode($response) . ')';
} else {
            // 通常のJSON形式で応答する場合
	echo json_encode($response);
}
?>