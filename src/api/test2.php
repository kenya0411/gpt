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
    $text_to_embed = $content['content'] . ' ' . $content['title']; // titleも追加
    // categoryがある場合は追加
    if (isset($content['category'])) {
        $text_to_embed .= ' ' . $content['category'];
    }
    try {
        $response = $openaiClient->embeddings()->create([
            'model' => 'text-embedding-3-small',
            'input' => $text_to_embed
        ]);

        if (isset($response->embeddings[0]->embedding)) {
            $embeddings[$content['id']] = [
                'embedding' => $response->embeddings[0]->embedding,
                'content' => $content['content'],
                'title' => $content['title'], // titleも保存
                'category' => $content['category'] ?? null // categoryも保存
            ];
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



// function openai($user_question){


//    $yourApiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found';
//     $client = OpenAI::client($yourApiKey);
//     $logFile = __DIR__ . '/../../log/embeddings.log';
//     $embeddingsData = read_embeddings_from_log($logFile);


// 	// ユーザーの質問の埋め込みを取得
// $response = $client->embeddings()->create([
//     'model' => 'text-embedding-3-small',
//     'input' => $user_question
// ]);
// $question_embedding = $response->embeddings[0]->embedding;

//     $best_score = 0;
//     $best_match = "";

//     foreach ($embeddingsData as $id => $data) { // idでループ
//         $text_embedding = $data['embedding'];
//         $text_content = $data['content'];
//         $text_title = $data['title'];
//         $text_category = $data['category'] ?? ''; // categoryがない場合の処理

//         // $text_embedding = $data['embedding'];
//         // $text_content = $data['content']; // contentを取得

//     if (!isset($data['embedding'])) {
//         continue; // 埋め込みベクトルが存在しないデータはスキップ
//     }
//     $text_embedding = $data['embedding'];
//     $dotProduct = 0;
//     $normA = 0;
//     $normB = 0;

//     // 各埋め込みベクトルの長さをチェックし、問題があればスキップ
//     if (count($question_embedding) !== count($text_embedding)) {
//         continue;
//     }

//     for ($i = 0; $i < count($question_embedding); $i++) {
//         $dotProduct += $question_embedding[$i] * $text_embedding[$i];
//         $normA += pow($question_embedding[$i], 2);
//         $normB += pow($text_embedding[$i], 2);
//     }

//     $normA = sqrt($normA);
//     $normB = sqrt($normB);
//     $cosineSimilarity = $dotProduct / ($normA * $normB);
//         // コサイン類似度の計算結果をログに出力
//         // error_log("Cosine similarity with '{$data['text']}': {$cosineSimilarity}");
//         if ($cosineSimilarity > $best_score) {
//             $best_score = $cosineSimilarity;
//             $best_match = $text_content; // または $text_title, $text_category を使う
//         }
// }
// file_put_contents('../../log/return.log', print_r($best_match, true));

//     if ($best_score < 0.5) {
//         $system_message = "ユーザーからの質問に対して関連する社内データが見つかりませんでした。その旨を正直に答えてください。";
//         $gpt_response = $client->chat()->create([
//             'model' => 'gpt-3.5-turbo',
//             'messages' => [
//                 ['role' => 'system', 'content' => $system_message],
//                 ['role' => 'user', 'content' => $user_question]
//             ],
//         ]);
//     } else {

//         $system_message = "以下の質問と関連性の高い情報に基づいて、最適な回答を生成してください。質問と関連する情報も提供します。";
//         $gpt_response = $client->chat()->create([
//             'model' => 'gpt-3.5-turbo',
//             'messages' => [
//                 ['role' => 'system', 'content' => $system_message . "■関連性の高い情報：" . $best_match],
//                 ['role' => 'user', 'content' => $user_question],
//             ],
//         ]);
//     }

//     return $gpt_response->choices[0]->message->content;
// }


function openai($user_question) {
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

    foreach ($embeddingsData as $id => $data) {
        $text_embedding = $data['embedding'];
        $text_content = $data['content'];
        $text_title = $data['title'];
        $text_category = $data['category'] ?? '';

        // タイトルの埋め込みを取得
        $title_embedding_response = $client->embeddings()->create([
            'model' => 'text-embedding-3-small',
            'input' => $text_title
        ]);
        $title_embedding = $title_embedding_response->embeddings[0]->embedding;

        // タイトルと質問の類似度計算
        $title_similarity = calculateCosineSimilarity($question_embedding, $title_embedding);

        // コンテンツと質問の類似度計算
        $content_similarity = calculateCosineSimilarity($question_embedding, $text_embedding);

        // 類似度の計算 (タイトルが類似している場合は、タイトルの重みを大きくする)
        $similarity = ($title_similarity > 0.7) // タイトルの類似度が高い場合
            ? max($title_similarity, ($title_similarity * 0.6 + $content_similarity * 0.4)) // タイトルの重みを大きくする
            : $content_similarity; // タイトルの類似度が低い場合はコンテンツの類似度のみ

        if ($similarity > $best_score) {
            $best_score = $similarity;
            $best_match = $text_content; // 類似度が最も高いコンテンツの内容を保存
        }
    }

    // GPT-3.5-turboへの問い合わせ
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
        $system_message = "以下の質問と関連性の高い情報に基づいて、最適な回答を生成してください。
        誰にでもわかるように分かりやすく回答してください。
        質問と関連する情報も提供します。
        適度に改行等を使って読みやすく出力してください。";
        $gpt_response = $client->chat()->create([
            // 'model' => 'gpt-4o',
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'system', 'content' => $system_message . "■関連性の高い情報：" . $best_match],
                ['role' => 'user', 'content' => $user_question],
            ],
        ]);
    }
file_put_contents('../../log/return.log', $gpt_response->choices[0]->message->content);

    return $gpt_response->choices[0]->message->content;
}

// コサイン類似度計算関数
function calculateCosineSimilarity($vec1, $vec2) {
    $dotProduct = 0;
    $normA = 0;
    $normB = 0;

    for ($i = 0; $i < count($vec1); $i++) {
        $dotProduct += $vec1[$i] * $vec2[$i];
        $normA += pow($vec1[$i], 2);
        $normB += pow($vec2[$i], 2);
    }

    $normA = sqrt($normA);
    $normB = sqrt($normB);
    
    // ゼロ除算を防ぐ
    if ($normA == 0 || $normB == 0) {
        return 0;
    }

    return $dotProduct / ($normA * $normB);
}

$text = isset($_GET['text']) ? filter_var($_GET['text'], FILTER_SANITIZE_STRING) : '';


$user_question = "次の会議はいつ？";


$callback = isset($_GET['callback']) ? filter_var($_GET['callback'], FILTER_SANITIZE_STRING) : '';

// $output = "aaa";
$output = openai($text);
// 改行コードの挿入 (<br> タグ)
$output = nl2br($output);

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