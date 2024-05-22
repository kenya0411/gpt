<?php
header('Content-Type: application/json; charset=UTF-8');

$config = require '../config/config.php';
require_once '../classes/MicroCMSClient.php';  // クラスファイルを適宜読み込む

$client = new MicroCMSClient($config['microcms']['apiUrl'], $config['microcms']['apiKey']);
$result = $client->fetchData();

if (!$result['success']) {
    http_response_code(500);
    echo json_encode(['error' => $result['error']]);
    exit;
}


// クエリパラメータ 'type' の存在を確認し、存在しない場合はデフォルト値 'img' を設定
$type = isset($_GET['type']) ? $_GET['type'] : 'chat';

// 'type' の値に応じて条件分岐
if ($type === 'chat') {
    // テキストデータを取得
    $textData = $result['data']['content'];  // または必要なテキストデータ
    $apiKey = $config['openai_api_key'];  // configからAPIキーを取得

    // Embeddingsの生成
    $embeddingsResult = generateEmbeddings($textData, $apiKey);
    file_put_contents('../../log/return.log', json_encode($embeddingsResult)); 

    // 結果の出力
    echo json_encode($embeddingsResult);

    // echo json_encode($result['data']);
} else {
    // index.html用に画像データを返す処理
    if (isset($result['data']['img'])) {
        echo json_encode(['img' => $result['data']['img']]);
    } else {
        echo json_encode(['error' => 'Image data not found']);
    }
}



function generateEmbeddings($text, $apiKey) {
    $postData = json_encode([
        'input' => $text,
        'model' => 'text-embedding-ada-002'  // 正しいモデル名の指定
    ]);
    $opts = [
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/json\r\n" .
                         "Authorization: Bearer " . $apiKey . "\r\n",
            'content' => $postData
        ]
    ];
    $context  = stream_context_create($opts);
    $url = 'https://api.openai.com/v1/embeddings';  // OpenAI Embeddings APIのURL
    $response = file_get_contents($url, false, $context);
    $response = json_decode($response, true);

    if (!isset($response['data'])) {
        return ['error' => 'Failed to generate embeddings', 'details' => $response];
    }

    return ['embeddings' => $response['data']];
}


?>
