//初次登陆，判断显示隐藏
function initHtml() {
    $(".to-regis").show();
    $(".to-login").hide();
    $("#nickname").hide();
    $("#onRegis").hide();
    $(".index-model").show();
    $(".chat-model").hide();
}

//登陆成功后，跳转chat-model
function toChatMoudle() {
    $(".index-model").hide();
    $(".chat-model").show();
}

$(function () {

    //跳转注册
    $("#goRegis").click(function (e) {
        e.preventDefault();
        $(".to-regis").hide();   //隐藏跳转注册 
        $(".to-login").show();   //显示跳转登陆
        $("#onLogin").hide();    //隐藏登陆按钮 
        $("#nickname").show();   //显示注册时昵称输入框
        $("#onRegis").show();    //显示注册按钮

        //跳转注册时，清空输入框
        $("#username").val("")
        $("#password").val("")
    })

    //跳转登陆
    $("#goLogin").click(function (e) {
        e.preventDefault();
        $(".to-regis").show();
        $(".to-login").hide();
        $("#nickname").hide();
        $("#onRegis").hide();
        $("#onLogin").show();
    })

})