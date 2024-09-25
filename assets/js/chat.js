const chatux = new ChatUx();

// 画像URLを直接指定
const botPhotoUrl = 'https://riversun.github.io/chatbot/bot_icon_operator.png'; // または任意の画像URL

const initParam = {
  renderMode: 'auto',
  api: {
    endpoint: './src/api/chat.php',
    method: 'GET',
    dataType: 'jsonp'
  },
  bot: {
    botPhoto: botPhotoUrl, // 指定した画像URLを使用
    humanPhoto: null,
    widget: {
      sendLabel: '送信',
      placeHolder: '何か話しかけてみてください'
    }
  },
  window: {
    title: 'チャットボット',
    infoUrl: 'https://github.com/riversun/chatux'
  }
};

chatux.init(initParam);

chatux.start(true);





// オプションボタンを表示する関数
function displayOptions(userMessage) {
  if (userMessage.includes('Lステップ')) {
    chatux.message.add({
      type: 'option', // オプションタイプを使用
      content: '関連する情報があります。以下のオプションを選択してください。',
      options: [
        { label: '詳細を見る', value: '1' },
        { label: 'お問い合わせ', value: '2' }
      ]
    });
  }
}

// ユーザーが送信したメッセージをAPIから処理する
chatux.message.add({
  type: 'text',
  content: '「Lステップ」に関する質問を入力してください。'
});

// 手動でユーザーの入力を取得して処理
document.querySelector('#chat-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const userMessage = e.target.value;
    e.target.value = '';  // 入力フィールドをクリア
    displayOptions(userMessage);  // 入力に基づきオプションを表示
  }
});