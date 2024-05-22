<?php
header('Content-Type: application/json; charset=UTF-8');

// config.php からAPIの設定を読み込む。これにより、APIの設定を一元管理しやすくなる。
// $config = require 'config.php';

/**
 * MicroCMSClient クラスは、MicroCMS APIからデータを取得するためのクライアントです。
 */
class MicroCMSClient {
    private $apiUrl; // APIのURL
    private $apiKey; // APIキー

    /**
     * コンストラクタ
     * @param string $apiUrl APIのベースURL
     * @param string $apiKey APIを認証するためのキー
     */
    public function __construct($apiUrl, $apiKey) {
        $this->apiUrl = $apiUrl;
        $this->apiKey = $apiKey;
    }

    /**
     * MicroCMSからデータをフェッチするメソッド
     * @return array フェッチしたデータの成功・失敗とデータ本体またはエラーメッセージを含む配列
     */
    
    public function fetchData() {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiUrl);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'X-MICROCMS-API-KEY: ' . $this->apiKey
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        // ローカル環境でのみSSL証明書の検証を無効化
        if ($_SERVER['SERVER_NAME'] === 'localhost' || $_SERVER['SERVER_ADDR'] === '127.0.0.1') {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        }

        $response = curl_exec($ch);
        if ($response === FALSE) {
            $error = curl_error($ch);
            curl_close($ch);
            return ['success' => false, 'error' => 'MicroCMSデータの取得に失敗しました。cURLエラー: ' . $error];
        }
        curl_close($ch);
        
        $data = json_decode($response, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            return ['success' => false, 'error' => 'MicroCMSデータのパースに失敗しました: ' . json_last_error_msg()];
        }
        
        return ['success' => true, 'data' => $data];
    }
}

// // MicroCMSClient クラスのインスタンスを作成
// $client = new MicroCMSClient($config['microcms']['apiUrl'], $config['microcms']['apiKey']);

// // データ取得とエラーハンドリング
// $result = $client->fetchData();
// if (!$result['success']) {
//     http_response_code(500);
//     echo json_encode(['error' => $result['error']]);
//     exit;
// }

// // 取得したデータをJSON形式で出力
// echo json_encode($result['data']);
?>
