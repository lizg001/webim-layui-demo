//初次登陆，判断显示隐藏
function initHtml() {
    $(".to-regis").show();
    $(".to-login").hide();
    $("#nickname").hide();
    $("#onRegis").hide();
    $(".index-model").show();
    $(".chat-model").hide();
    $("#username").val('');
    $("#password").val('')

}

//登陆成功后，跳转chat-model
function toChatMoudle() {
    //隐藏登陆页
    $(".index-model").hide();
    //显示聊天页
    $(".chat-model").show();
    //默认点击获取会话列表
    $('.side-setting li:first').click();
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


    //显示会话列表
    $("#channels").click(function () {  
        $(".channels-contact").show();
        $(".list-contact").hide();
        $(".room-contact").hide();
    })
     //显示联系人列表
     $("#contact").click(function () {  
        $(".channels-contact").hide();
        $(".list-contact").show();
        $(".room-contact").hide();
    })
    //显示聊天室列表
    $("#room").click(function () {  
        $(".channels-contact").hide();
        $(".list-contact").hide();
        $(".room-contact").show();
    })

})