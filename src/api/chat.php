<?php
require_once __DIR__ . '/../../vendor/autoload.php'; // 必要なライブラリを読み込む

use Dotenv\Dotenv; // 環境変数を読み込むためのライブラリ
// use OpenAI; // OpenAI API を利用するためのライブラリ

class OpenAIApi {
    private $client; // OpenAI API クライアント
    private $logFile; // 埋め込みデータを保存するログファイルのパス

    // コンストラクタ：クラスがインスタンス化された時に実行される
    public function __construct() {
        $dotenv = Dotenv::createImmutable(__DIR__ . '/../../'); // 環境変数を読み込む準備
        $dotenv->load(); // 環境変数を読み込む
        $apiKey = $_ENV['OPEN_AI_API_KEY'] ?? 'API key not found'; // OpenAI API キーを取得
        $this->client = OpenAI::client($apiKey); // OpenAI API クライアントを初期化
        $this->logFile = __DIR__ . '/../../log/embeddings.log'; // ログファイルのパスを設定
    }

    // メインの処理：ユーザーの質問に対する回答を生成する
    public function getResponse($user_question) {
        $embeddingsData = $this->readEmbeddingsFromLog(); // 埋め込みデータを読み込む
        $questionEmbedding = $this->getEmbedding($user_question); // ユーザーの質問の埋め込みベクトルを取得

        // 類似度が最も高い埋め込みデータとそのスコア、タイトルを取得
        // [$bestScore, $bestMatch, $bestMatchTitle] = $this->findBestMatch($embeddingsData, $questionEmbedding);

    // 類似度が最も高い埋め込みデータとそのスコア、タイトル、関連質問を取得
    [$bestScore, $bestMatch, $bestMatchTitle, $relatedQuestions] = $this->findBestMatch($embeddingsData, $questionEmbedding);


        // file_put_contents('../../log/best_match.log', $bestScore); // 類似度スコアをログに記録

        // OpenAI API に送信するシステムメッセージを作成
        $systemMessage = $this->getSystemMessage($bestScore, $bestMatchTitle, $bestMatch);

        // OpenAI API (ChatCompletion) を呼び出して回答を生成
        $gptResponse = $this->client->chat()->create([
            'model' => 'gpt-4o-mini', // 使用するモデル (gpt-3.5-turbo または gpt-4o)
            // 'model' => 'gpt-4o', // 使用するモデル (gpt-3.5-turbo または gpt-4o)
            // 'model' => 'gpt-3.5-turbo', // 使用するモデル (gpt-3.5-turbo または gpt-4o)
            'messages' => [
                ['role' => 'system', 'content' => $systemMessage], // システムメッセージ
                ['role' => 'user', 'content' => $user_question],   // ユーザーの質問
            ],
            // 'max_tokens' => 150, // 必要に応じて最大トークン数を指定
        ]);

        // 回答をログに記録
        // file_put_contents('../../log/return.log', $bestMatchTitle);

        // 生成された回答を返す
        // return $gptResponse->choices[0]->message->content;
        return [$gptResponse->choices[0]->message->content, $relatedQuestions];
    }

    // 埋め込みデータをログファイルから読み込む
    private function readEmbeddingsFromLog() {
        $content = file_get_contents($this->logFile); // ログファイルの内容を読み込む
                file_put_contents('../../log/return.log', $content);

        return json_decode($content, true) ?? []; // JSON を配列に変換 (失敗時は空の配列)
    }

    // 指定されたテキストの埋め込みベクトルを取得する
    private function getEmbedding($text) {
        $response = $this->client->embeddings()->create([
            'model' => 'text-embedding-3-small', // 埋め込みモデル
            'input' => $text // 埋め込みを取得するテキスト
        ]);
        return $response->embeddings[0]->embedding; // 埋め込みベクトルを返す
    }

    // 類似度が最も高い埋め込みデータを見つける
    private function findBestMatch($embeddingsData, $questionEmbedding) {
        $bestScore = 0;
        $bestMatch = "";
        $bestMatchTitle = "";
        $similarities = [];
         $relatedQuestions = []; // 修正: ループの外で宣言

        foreach ($embeddingsData as $id => $data) {
            $textEmbedding = $data['embedding'];
            $textContent = $data['content'];
            $textTitle = $data['title'];

            $titleEmbedding = $this->getEmbedding($textTitle);

            $titleSimilarity = $this->calculateCosineSimilarity($questionEmbedding, $titleEmbedding);
            $contentSimilarity = $this->calculateCosineSimilarity($questionEmbedding, $textEmbedding);

            $similarity = ($titleSimilarity > 0.7)
                ? ($titleSimilarity * 0.6 + $contentSimilarity * 0.4) // タイトルが類似している場合は重み付け
                : $contentSimilarity;

            $similarities[$id] = $similarity; // 類似度を保存
        }

        // 最も類似度が高いIDを取得
        $bestMatchId = array_search(max($similarities), $similarities);

            // 修正: 最も類似度が高い要素の関連質問を取得
    $relatedQuestions = [
        $embeddingsData[$bestMatchId]['related_question1'] ?? '',
        $embeddingsData[$bestMatchId]['related_question2'] ?? '',
        $embeddingsData[$bestMatchId]['related_question3'] ?? ''
    ];
        return [
            $similarities[$bestMatchId], // 類似度
            $embeddingsData[$bestMatchId]['content'], // コンテンツ
            $embeddingsData[$bestMatchId]['title'], // タイトル
             $relatedQuestions // 関連質問
        ];
    }

    // OpenAI API に送信するシステムメッセージを作成する
    private function getSystemMessage($bestScore, $bestMatchTitle, $bestMatch) {
        if ($bestScore < 0.3) { // 類似度が低い場合
            return "あなたはチャットボットです。ユーザーからの質問に対して関連する社内データが見つかりませんでした。その旨を正直に答えてください。";
        } else { // 類似度が高い場合
            return "あなたはLステップに関する専門のチャットボットです。
            マークダウン記法で出力しないでください。
            以下の質問と関連性の高い情報に基づいて、追加の解説や詳細を含めず、元の情報のみを使用して最適な回答をしてください。
            適度に改行や空行等を使って読みやすく出力してください。
            丁寧語で文章は作成してください。ハルシネーションはしないでください。
            質問に対する回答を生成する際、提供した情報のみを用いてください。関連性のない情報は100%追加しないようお願いします。
            最大で300文字程度にしてください。■関連性の高い情報：" . $bestMatchTitle . "\n" . $bestMatch;
        }
    }

    // 2つのベクトル間の余弦類似度を計算する
    private function calculateCosineSimilarity($vec1, $vec2) {
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

        if ($normA == 0 || $normB == 0) {
            return 0;
        }

        return $dotProduct / ($normA * $normB);
    }
}

// ユーザからの質問を取得
$text = isset($_GET['text']) ? filter_var($_GET['text'], FILTER_SANITIZE_STRING) : '';

// OpenAIApi クラスのインスタンスを作成
$openaiApi = new OpenAIApi();

// // 応答を取得
// $output = $openaiApi->getResponse($text);

// 応答を取得
list($output, $relatedQuestions) = $openaiApi->getResponse($text);


// 改行コードを挿入 (<br> タグ)
$output = nl2br($output);

// // 応答データを作成
// $response = [
//     'output' => [
//         [
//             'type' => 'text',
//             'value' => trim($output)
//         ],                [
//                     'type' => 'option',
//                     'options' => [
//                         ['label' => '詳細を見る', 'value' => 'details'],
//                         ['label' => 'お問い合わせ', 'value' => 'contact']
//                     ]
//                 ]
//     ]
// ];
// 応答データを作成
$response = [
    'output' => [
        [
            'type' => 'text',
            'value' => trim($output)
        ]
    ]
];

// 関連質問が存在する場合のみオプションを追加
$options = [];
foreach ($relatedQuestions as $question) {
    if ($question) {
        $options[] = ['label' => $question, 'value' => $question];
    }
}

if (!empty($options)) {
    $response['output'][] = [
        'type' => 'option',
        'options' => $options
    ];
}
$callback = isset($_GET['callback']) ? filter_var($_GET['callback'], FILTER_SANITIZE_STRING) : '';

// JSONP形式で応答する場合
if ($callback) {
    echo $callback . '(' . json_encode($response) . ')';
} else {
    // 通常のJSON形式で応答する場合
    echo json_encode($response);
}
