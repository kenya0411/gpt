<?php 

require_once __DIR__ . '/../../vendor/autoload.php';


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();


$yourApiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found';

$openaiClient = OpenAI::client($yourApiKey);


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


// file_put_contents('../../log/return.log', print_r($response, true));


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

        if (isset($response->embeddings[0]->embedding)) {
        	$num = $response->embeddings[0]->index;
            $embeddings[$num] = $response->embeddings[0]->embedding;
        } else {
            // エンベディングが取得できなかった場合のログ
            error_log('No embedding data for content ID: ' . $content['id']);
        }
    } catch (\Exception $e) {
        // エラーハンドリング: エラーをログに記録
        error_log('Error embedding content: ' . $e->getMessage());
    }
}


// Embedding結果をログファイルに保存
$logFile = __DIR__ . '/../../log/embeddings.log';
$result = file_put_contents($logFile, json_encode($embeddings));
if ($result === false) {
    error_log("Failed to write embeddings to log file: {$logFile}");
}




function read_embeddings_from_log($filename) {
    $content = file_get_contents($filename);
    $data = json_decode($content, true);

    return $data ?? [];
}



function openai($user_question){


   $yourApiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found';
    $client = OpenAI::client($yourApiKey);
    $logFile = __DIR__ . '/../../log/embeddings.log';
    $embeddingsData = read_embeddings_from_log($logFile);


	// ユーザーの質問の埋め込みを取得
$response = $client->embeddings()->create([
    'model' => 'text-embedding-3-small',
    'input' => $user_question
]);
$question_embedding = $response->embeddings[0]->embedding;

    $best_score = 0;
    $best_match = "";

foreach ($embeddingsData as $data) {
    if (!isset($data['embedding'])) {
        continue; // 埋め込みベクトルが存在しないデータはスキップ
    }
    $text_embedding = $data['embedding'];
    $dotProduct = 0;
    $normA = 0;
    $normB = 0;

    // 各埋め込みベクトルの長さをチェックし、問題があればスキップ
    if (count($question_embedding) !== count($text_embedding)) {
        continue;
    }

    for ($i = 0; $i < count($question_embedding); $i++) {
        $dotProduct += $question_embedding[$i] * $text_embedding[$i];
        $normA += pow($question_embedding[$i], 2);
        $normB += pow($text_embedding[$i], 2);
    }

    $normA = sqrt($normA);
    $normB = sqrt($normB);
    $cosineSimilarity = $dotProduct / ($normA * $normB);
        // コサイン類似度の計算結果をログに出力
        // error_log("Cosine similarity with '{$data['text']}': {$cosineSimilarity}");
    if ($cosineSimilarity > $best_score) {
        $best_score = $cosineSimilarity;
        $best_match = $data['text'];
    }
}
// file_put_contents('../../log/return.log', print_r($best_score, true));

    if ($best_score < 0.5) {
        $system_message = "ユーザーからの質問に対して関連する社内データが見つかりませんでした。その旨を正直に答えてください。";
        $gpt_response = $client->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'system', 'content' => $system_message],
                ['role' => 'user', 'content' => $user_question]
            ],
        ]);
    } else {
        $system_message = "以下の質問に基づいて、最適な回答を生成してください。質問と関連する情報も提供します。";
        $gpt_response = $client->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'system', 'content' => $system_message . "■関連性の高い情報：" . $best_match],
                ['role' => 'user', 'content' => $user_question],
            ],
        ]);
    }

    return $gpt_response->choices[0]->message->content;
}



$text = isset($_GET['text']) ? filter_var($_GET['text'], FILTER_SANITIZE_STRING) : '';


$user_question = "次の会議はいつ？";


$callback = isset($_GET['callback']) ? filter_var($_GET['callback'], FILTER_SANITIZE_STRING) : '';

// $output = "aaa";
$output = openai($text);
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