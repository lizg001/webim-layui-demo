// let user;
//     pwd;
//     nick;
//     regisSuc;

let userData = {
    user:"",
    pwd:"",
    nick:"",
}

$(function () {
    $("#username").on("input", function (e) {
        userData.user = e.delegateTarget.value;
    });
    $("#password").on("input", function (e) {
        userData.pwd = e.delegateTarget.value;
    });
    $("#nickname").on("input", function (e) {
        userData.nick = e.delegateTarget.value;
    });

    //登陆
    $("#onLogin").click(function (e) {
        e.preventDefault();
        userApi.onLogin(userData);
    });

    //注册
    $("#onRegis").click(function (e) {
        e.preventDefault();
        userApi.onRegister(userData);
    });
})