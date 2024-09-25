const chatux = new ChatUx();

// 画像URLを直接指定
const botPhotoUrl = 'https://riversun.github.io/chatbot/bot_icon_operator.png'; // または任意の画像URL

const initParam = {
    //auto:PCとスマホを自動判定、pc:強制的にPCモード、mobile:強制的にスマホモード
    renderMode: 'auto',
    //true:チャットUIが開いたら、チャット起動ボタンを消す(pcモードのみ有効)
    // buttonOffWhenOpenFrame: true,
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
// chatux.start(true);
chatux.start(false);