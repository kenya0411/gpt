<?php
header('Content-Type: application/json; charset=UTF-8');

/**
 * OpenAiHandler クラス
 * OpenAI APIとのやり取りを行うクラス
 */
class OpenAiHandler {
    private $apiKey;
    private $apiUrl = 'https://api.openai.com/v1/chat/completions';

    /**
     * コンストラクタ
     * @param string $configPath 設定ファイルのパス
     */
    public function __construct($configPath) {
        // 設定ファイルからAPIキーを読み込む
        $config = include($configPath);
        $this->apiKey = $config['openai_api_key'];
        
        // エラーログ設定を行う
        $this->configureErrorLogging();
    }

/**
 * エラーログ設定を行うメソッド
 */
private function configureErrorLogging() {
    ini_set('display_errors', 1); // 変更: エラーメッセージを表示
    ini_set('display_startup_errors', 1); // 変更: スタートアップエラーを表示
    error_reporting(E_ALL);
    ini_set('log_errors', 1);
    ini_set('error_log', __DIR__ . '/log/error_log.log'); // エラーログファイルのパス
}



    /**
     * MicroCMSからデータを取得するメソッド
     * @return array 取得したデータ
     * @throws Exception データの取得またはパースに失敗した場合
     */
    private function fetchMicroCMSData() {

    // fetch_microcms_data.php を実行し、その出力をバッファに保存
    ob_start();
    include './fetch_microcms_data.php';
    $response = ob_get_clean();
    // file_put_contents('return.log', $response); 

        if ($response === FALSE) {
            throw new Exception('MicroCMSデータの取得に失敗しました。');
        }

        $data = json_decode($response, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('MicroCMSデータのパースに失敗しました: ' . json_last_error_msg());
        }

        return $data;
    }


    /**
     * テキストの埋め込みを取得するメソッド
     * @param string $text 埋め込みを取得するテキスト
     * @return array 埋め込みベクトル
     */
    private function getEmbedding($text) {
        $url = 'https://api.openai.com/v1/embeddings';
        $data = [
            'input' => $text,
            'model' => 'text-embedding-ada-002',
        ];
        $options = [
            'http' => [
                'header'  => "Content-Type: application/json\r\nAuthorization: Bearer " . $this->apiKey . "\r\n",
                'method'  => 'POST',
                'content' => json_encode($data),
            ],
        ];
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        if ($result === FALSE) {
            throw new Exception('埋め込みの取得に失敗しました。');
        }
        $response = json_decode($result, true);
        return $response['data'][0]['embedding'];
    }

    /**
     * コサイン類似度を計算するメソッド
     * @param array $vecA ベクトルA
     * @param array $vecB ベクトルB
     * @return float 類似度
     */
    private function cosineSimilarity($vecA, $vecB) {
        $dotProduct = array_sum(array_map(function($a, $b) { return $a * $b; }, $vecA, $vecB));
        $magnitudeA = sqrt(array_sum(array_map(function($a) { return $a * $a; }, $vecA)));
        $magnitudeB = sqrt(array_sum(array_map(function($a) { return $a * $a; }, $vecB)));
        return $dotProduct / ($magnitudeA * $magnitudeB);
    }




    /**
     * OpenAI APIリクエストを送信するメソッド
     * @param string $text ユーザーからの入力テキスト
     * @return string APIからの応答メッセージ
     * @throws Exception APIリクエストまたは応答に失敗した場合
     */
    public function sendRequest($text) {
        $microCMSData = $this->fetchMicroCMSData();
        $system_rule = $microCMSData;

        // クエリとシステムルールの埋め込みを取得
        $queryEmbedding = $this->getEmbedding($text);
        $systemEmbedding = $this->getEmbedding($system_rule['content']);
    file_put_contents('../../log/return.log', $systemEmbedding); 

        // 類似度を計算
        $similarity = $this->cosineSimilarity($queryEmbedding, $systemEmbedding);

        // 類似度に基づいてGPTからの応答を生成
        $prompt = "The similarity between the user query and system rule is: " . $similarity . ". Based on this, generate a response.";

        // GPT APIリクエストデータの設定
        $data = [
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' => $system_rule],
                ['role' => 'user', 'content' => $text],
                ['role' => 'assistant', 'content' => $prompt]
            ],
            'max_tokens' => 500,
            'presence_penalty' => 2.0,
            'frequency_penalty' => 2.0,
        ];

        // HTTPリクエストのオプション設定
        $options = [
            'http' => [
                'header' => "Content-Type: application/json\r\n" .
                            "Authorization: Bearer " . $this->apiKey . "\r\n",
                'method' => 'POST',
                'content' => json_encode($data),
            ],
        ];

        // コンテキストの作成とAPIリクエストの送信
        $context = stream_context_create($options);
        $result = file_get_contents($this->apiUrl, false, $context);

        // APIリクエストの結果をチェック
        if ($result === FALSE) {
            throw new Exception('APIリクエストに失敗しました。');
        }

        // API応答をデコード
        $responseData = json_decode($result, true);
        if (!isset($responseData['choices'][0]['message']['content'])) {
            throw new Exception('API応答に失敗しました: ' . json_encode($responseData));
        }

        return $responseData['choices'][0]['message']['content'];
    }

    /**
     * エラーハンドリングを行うメソッド
     * @param Exception $e キャッチした例外
     * @return string ユーザーへのエラーメッセージ
     */
    public function handleError($e) { // 修正: private から public に変更
        // エラーメッセージをログに記録
        error_log($e->getMessage());
        // ユーザーへのエラーメッセージを返す
        return 'エラーが発生しました。ご質問がございましたらお問い合わせください';
    }


    /**
     * API応答の処理を行うメソッド
     * @param string $output APIからの応答メッセージ
     * @param string $callback コールバック関数名 (オプション)
     */
    public function createResponse($output, $callback = '') {
        // 応答データの作成
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
    }
}

// メイン処理
try {
    // OpenAiHandlerクラスのインスタンスを作成
    $handler = new OpenAiHandler('../config/config.php');

    // ユーザー入力の検証
    $text = isset($_GET['text']) ? filter_var($_GET['text'], FILTER_SANITIZE_STRING) : '';
    $callback = isset($_GET['callback']) ? filter_var($_GET['callback'], FILTER_SANITIZE_STRING) : '';

    // OpenAI APIにリクエストを送信
    $chatGptOutput = $handler->sendRequest($text);
} catch (Exception $e) {
    // エラー発生時の処理
    $chatGptOutput = $handler->handleError($e);
}

// API応答の生成と送信
$handler->createResponse($chatGptOutput, $callback);
?>
