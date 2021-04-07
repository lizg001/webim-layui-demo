
let usersList = [];     //好友列表储存
let userApi = {  
    //登陆
    onLogin: (userData) => {
        console.log(userData);
        let { user,pwd } = userData
        let options = {
            user: user,
            pwd: pwd,
            appKey: WebIM.config.appkey,
            success: (res) =>  {
                console.log('登陆success',res);
                let accessToken = res.access_token
                localStorage.setItem("userInfo", JSON.stringify({ userId: user, token: accessToken }));
            }
        };
        WebIM.conn.open(options);
    },
    //注册
    onRegister: (userData) => {
        let { user,pwd,nick } = userData
        let options = {
            username: user,
            password: pwd,
            nickname: nick,
            appKey: WebIM.config.appkey,
            success: function (res) {
                console.log('注册成功', res);
                alertMessage("registerSuc");
            },
            error: function (err) {
                let errorData = JSON.parse(err.data).error;
                messageNotice.alertErrorMessage(errorData);
            },
        };
        WebIM.conn.registerUser(options);
    },
    //拉取好友
    onGetRoster: () => {
        WebIM.conn.getRoster().then((res) => {
            usersList = res.data;
            showCaht.showContactList(usersList);
            $("#contactList").click();
            //  //直接展开
            //  $("#contact-list-icon").addClass("icon-active");
        });
    }
}