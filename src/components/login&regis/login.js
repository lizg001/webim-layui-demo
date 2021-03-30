let user;
let pwd;

$(function () {
    $("#username").on("input", function (e) {
        user = e.delegateTarget.value;
    });
    $("#password").on("input", function (e) {
        pwd = e.delegateTarget.value;
    });
    

    //登陆
    $("#onLogin").click(function (e) {
        e.preventDefault();
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
    });
})