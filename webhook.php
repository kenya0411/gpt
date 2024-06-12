<?php
require_once __DIR__ . '/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// データベース接続設定
$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => $_ENV['DB_HOST'],
    'database'  => $_ENV['DB_NAME'],
    'username'  => $_ENV['DB_USER'],
    'password'  => $_ENV['DB_PASSWORD'],
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();

// OpenAI APIキー
$openaiApiKey = $_ENV['OPEN_AI_API_KEY'];

// その他設定
$microcmsWebhookSecret = $_ENV['MICROCMS_WEBHOOK_SECRET'];
$customHeaderKey = $_ENV['CUSTOM_HEADER_KEY'];
$customHeaderValue = $_ENV['CUSTOM_HEADER_VALUE'];

// OpenAIクライアント初期化
$openaiClient = OpenAI::client($openaiApiKey);

// リクエストメソッド確認
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    exit;
}

// リクエストボディ取得
$requestBody = file_get_contents('php://input');

// Webhookシークレット検証
$signature = $_SERVER['HTTP_X_MICROCMS_SIGNATURE'];
$expectedSignature = hash_hmac('sha256', $requestBody, $microcmsWebhookSecret);
if (!hash_equals($signature, $expectedSignature)) {
    http_response_code(401); // Unauthorized
    exit;
}

// カスタムヘッダー検証
if (isset($_SERVER[$customHeaderKey])) { // カスタムヘッダーの存在確認 (小文字に変換しない)
    $customHeaderValueReceived = $_SERVER[$customHeaderKey];
    if ($customHeaderValueReceived !== $customHeaderValue) {
        http_response_code(403); // Forbidden
        exit;
    }
} 

// Webhookペイロード取得
$payload = json_decode($requestBody, true);

// DBから既存データ取得
$existingData = Capsule::table('chatbot')->where('id', $payload['id'])->first();

// Embedding生成
$embeddings = generateEmbeddings($openaiClient, $payload);

// Webhookペイロード取得
$payload = json_decode($requestBody, true);

// ペイロード検証 (content, titleの存在確認)
if (
    !isset($payload['contents']['new']['publishValue']['content']) ||
    !isset($payload['contents']['new']['publishValue']['title'])
) {
    http_response_code(400); // Bad Request
    exit("Invalid payload: 'contents.new.publishValue.content' or 'contents.new.publishValue.title' is missing.");
}

// DBから既存データ取得
$existingData = Capsule::table('chatbot')->where('cms_id', $payload['id'])->first();

// 更新するデータ
$updateData = [
    'content' => $payload['contents']['new']['publishValue']['content'],
    'title' => $payload['contents']['new']['publishValue']['title'],
    'category' => $payload['contents']['new']['publishValue']['category'] ?? null,
    'status' => $payload['contents']['new']['status'][0],
];

// embedding用のデータ (payloadから直接取得)
$embeddingData = [
    'embedding_title' => $payload['contents']['new']['publishValue']['title'],
    'embedding_content' => $payload['contents']['new']['publishValue']['content'],
    'embedding_category' => $payload['contents']['new']['publishValue']['category'] ?? null,
];

// 既存データが存在する場合、変更があったカラムのみ更新
if ($existingData) {
    $embeddingUpdated = false; // embedding更新フラグ
    foreach ($embeddingData as $key => $value) {
        if ($existingData->$key !== $value) {
            $embeddingUpdated = true; // 変更があればフラグを立てる
            break; // ループを抜ける
        }
    }

    if ($embeddingUpdated) {
        // embeddingが更新された場合、embeddingを生成して保存
        $embeddings = generateEmbeddings($openaiClient, $embeddingData);
        $updateData = array_merge($updateData, $embeddingData); // embeddingDataをupdateDataにマージ
    }
} else {
    // 新規データの場合、embeddingを生成して保存
    $embeddings = generateEmbeddings($openaiClient, $embeddingData);
    $updateData = array_merge($updateData, $embeddingData); // embeddingDataをupdateDataにマージ
}

// データ保存 (新規作成または更新)
Capsule::table('chatbot')->updateOrInsert(
    ['cms_id' => $payload['id']],
    $updateData // embeddingを含めたupdateDataで更新
);


// デバッグログ出力（保存後）
// error_log('Data saved successfully.');





// Embedding生成関数
function generateEmbeddings($openaiClient, $data) {
    $textToEmbed = $data['embedding_content'] . ' ' . $data['embedding_title']; 
    if (isset($data['embedding_category'])) {
        $textToEmbed .= ' ' . $data['embedding_category'];
    }

    try {
        $response = $openaiClient->embeddings()->create([
            'model' => 'text-embedding-3-small', 
            'input' => $textToEmbed
        ]);

        // レスポンスの data が空の配列でないことを確認
        if (isset($response->data[0]->embedding)) {
            return $response->data[0]->embedding; // embeddingのみを返す
        } else {
            // error_log('No embedding data found in the response.'.print_r($response, true)); // レスポンス内容をログに出力
            return null; // or throw an exception
        }
    } catch (\Exception $e) {
        // error_log('Error generating embeddings: ' . $e->getMessage());
        return null;
    }
}
// 検証成功
http_response_code(200);

