
WebIM.conn.listen({
    onOpened: function (message) {
        setTimeout(() => {
            messageNotice.alertMessage("loginSuc");
            toChatMoudle();
        }, 100);
    },         //连接成功回调 
    onClosed: function (message) {
        initHtml();
        localStorage.clear();
    },         //连接关闭回调
    onTextMessage: function (message) { },    //收到文本消息
    onEmojiMessage: function (message) { },   //收到表情消息
    onPictureMessage: function (message) { }, //收到图片消息
    onCmdMessage: function (message) { },     //收到命令消息
    onAudioMessage: function (message) { },   //收到音频消息
    onLocationMessage: function (message) { },//收到位置消息
    onFileMessage: function (message) { },    //收到文件消息
    onVideoMessage: function (message) { },   //收到视频消息
    onPresence: function (message) { },       //处理“广播”或“发布-订阅”消息，如联系人订阅请求、处理群组、聊天室被踢解散等消息
    onRoster: function (message) { },         //处理好友申请
    onInviteMessage: function (message) { },  //处理群组邀请
    onOnline: function () { },                  //本机网络连接成功
    onOffline: function () { },                 //本机网络掉线
    onError: function (message) {
        let error;
        if (message.message === "the user cannot be empty") {
            error = "the user cannot be empty"
        } else {
            error = JSON.parse(message.data.data).error_description
        }
        messageNotice.alertErrorMessage(error)
    },          //失败回调
    onBlacklistUpdate: function (list) { },      //黑名单变动,
    onRecallMessage: function (message) { },      //收到撤回消息回调
    onReceivedMessage: function (message) { },    //收到消息送达服务器回执
    onDeliveredMessage: function (message) { },   //收到消息送达客户端回执
    onReadMessage: function (message) { },        //收到消息已读回执
    onCreateGroup: function (message) { },        //创建群组成功回执（需调用createGroupNew）
    onMutedMessage: function (message) { },       //如果用户在A群组被禁言，在A群发消息会走这个回调并且消息不会传递给群其它成员
    onChannelMessage: function (message) { }      //收到整个会话已读的回执，在对方发送channel ack时会在这个回调里收到消息
});