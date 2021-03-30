let nick;
let regisSuc;

$(function () {  
    $("#nickname").on("input", function (e) {
        nick = e.delegateTarget.value;
    });
    //注册
    $("#onRegis").click(function (e) {
        e.preventDefault();
        let options = {
            username: user,
            password: pwd,
            nickname: nick,
            appKey: WebIM.config.appkey,
            success: function (res) {
                console.log('注册成功', res);
                regisSuc = "注册成功"
                alertMessage(regisSuc);
            },
            error: function (err) {
                let errorData = JSON.parse(err.data).error;
                alertErrorMessage(errorData);
            },
        };
        WebIM.conn.registerUser(options);
    });
})