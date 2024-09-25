<?php

require_once __DIR__ . '/../../vendor/autoload.php';
use Dotenv\Dotenv;
// use OpenAI;

/**
 * OpenAIのEmbedding APIを使用してテキストの埋め込みを生成し、ログファイルに保存するクラス
 */
class OpenAIEmbeddingProcessor {
    private $openaiClient; // OpenAI APIクライアント
    private $logFile; // 埋め込みを保存するログファイルのパス

    /**
     * コンストラクタ
     * - 環境変数からAPIキーを読み込む
     * - OpenAI APIクライアントを初期化する
     * - ログファイルのパスを設定する
     */
    public function __construct() {
        // 環境変数の読み込み
        $dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
        $dotenv->load();

        // APIキーの取得とクライアントの初期化
        $apiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found';
        $this->openaiClient = OpenAI::client($apiKey);

        // ログファイルパスの設定
        $this->logFile = __DIR__ . '/../../log/embeddings.log';
    }

    /**
     * 埋め込み処理のメイン関数
     * - JSONデータを受け取る
     * - 各テキストの埋め込みを生成する
     * - 埋め込みをログファイルに保存する
     */
    public function processEmbeddings() {
        // JSONデータの取得
        $jsonData = file_get_contents('php://input');
        $data = json_decode($jsonData, true);
        file_put_contents(__DIR__. "/../../log/test.log", var_export($data,true ));
        
        // 埋め込みの生成
        $embeddings = [];
        foreach ($data as $entry) {
            $embedding = $this->generateEmbedding($entry);
            if ($embedding) {
                $embeddings[] = $embedding; // エラーでない場合のみ追加
            }
        }

        // 埋め込みのログ保存
        $this->logEmbeddings($embeddings);

        // 処理完了メッセージ
        echo "Embeddings processed and logged.";
    }

    /**
     * テキストの埋め込みを生成する
     * 
     * @param array $entry テキストデータ（タイトル、内容、カテゴリー）
     * @return array|null 生成された埋め込みデータ（エラー時はnull）
     */
    private function generateEmbedding($entry) {
        // テキストデータの取得
        $content = $entry[1];
        $title = $entry[0];
        $category = isset($entry[2]) ? $entry[2] : null;

        // 埋め込み対象のテキストを作成
        $textToEmbed = $content . ' ' . $title . ($category ? ' ' . $category : '');

        try {
            // OpenAI APIを呼び出して埋め込みを生成
            $response = $this->openaiClient->embeddings()->create([
                'model' => 'text-embedding-3-small',
                'input' => $textToEmbed
            ]);

            // 埋め込みデータの取得と返却
            if (isset($response->embeddings[0]->embedding)) {
                return [
                    'embedding' => $response->embeddings[0]->embedding,
                    'content' => $content,
                    'title' => $title,
                    'category' => $category
                ];
            }
        } catch (\Exception $e) {
            // エラー発生時のログ出力
            error_log('Error embedding content: ' . $e->getMessage());
        }

        return null; // エラー時はnullを返す
    }

    /**
     * 埋め込みデータをログファイルに保存する
     * 
     * @param array $embeddings 埋め込みデータの配列
     */
    private function logEmbeddings($embeddings) {
        // 埋め込みデータをJSON形式に変換
        $jsonEmbeddings = json_encode($embeddings);

        // ログファイルへの書き込み
        $result = file_put_contents($this->logFile, $jsonEmbeddings);

        // 書き込み失敗時のログ出力
        if ($result === false) {
            error_log("Failed to write embeddings to log file.");
        }
    }
}

// 埋め込み処理の実行
$processor = new OpenAIEmbeddingProcessor();
$processor->processEmbeddings();
