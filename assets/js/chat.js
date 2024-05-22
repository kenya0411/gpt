    const chatux = new ChatUx();
    // Fetch the bot photo from MicroCMS data
    fetch('./src/api/fetch_microcms_data.php?type=img')
        .then(response => response.json())
        .then(data => {
            const botPhotoUrl = data.img.url || 'https://riversun.github.io/chatbot/bot_icon_operator.png';

            const initParam = {
                renderMode: 'auto',
                api: {
                    endpoint: './src/api/chat.php',
                    method: 'GET',
                    dataType: 'jsonp'
                },
                bot: {
                    botPhoto: botPhotoUrl,
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
        })
        .catch(error => {
            console.error('Error fetching bot photo URL:', error);
        });