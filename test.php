<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';
use \Microcms\Client;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

function openai(){

$yourApiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found';

$client = OpenAI::client($yourApiKey);

// 社内データの配列
$texts = [
    "次の全体会議は来週の月曜日に開催されます。",
    "重要なセキュリティ更新がありますので、すぐにシステム更新を行ってください。",
    "新しい社内イベントのスケジュールが公開されました。",
    "年末の業務報告書の提出期限について"
];

// ユーザーの質問を受け取る
$user_question = "明日の天気はなんですか？";

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

// GPTを使って適切な形で情報を成形する
$gpt_response = $client->chat()->create([
    'model' => 'gpt-3.5-turbo',
    'messages' => [
        ['role' => 'system', 'content' => "次の情報をユーザーに適切に伝えてください:"],
        ['role' => 'user', 'content' => $best_match]
    ],
]);

// GPTモデルの成形した回答を取得
$gpt_answer = $gpt_response->choices[0]->message->content;

echo "Adjusted answer: " . $gpt_answer . "\n";

}
// use GuzzleHttp\Client as GuzzleClient;
// use Microcms\Client as MicrocmsClient;

// // Guzzle HTTPクライアントのインスタンスを作成し、SSL検証を無視する設定
// $guzzleClient = new GuzzleClient([
//     'verify' => false // SSL証明書の検証を無視
// ]);

// // MicroCMSクライアントのインスタンスを作成
// $microcmsClient = new MicrocmsClient(
//     $_ENV['MICROCMS_DOMAIN'],  // サービスドメイン
//     $_ENV['MICROCMS_API_KEY'], // APIキー
//     $guzzleClient              // カスタムGuzzleクライアントを使用
// );

// // 特定のエンドポイントからデータを取得
// $response = $microcmsClient->list("chatbot");
// echo '<pre>';
// var_dump($response);
// echo '</pre>';
?>
