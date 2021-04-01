let layer;
let notice;
let element;

// window.onload = function () {  
    // initHtml();
    // let userInfo = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo'));
    // if (userInfo != null) {
    //     console.log(userInfo)
    //     let options = {
    //         user: userInfo.userId,
    //         accessToken: userInfo.token,
    //         appKey: WebIM.config.appkey,
    //     };
    //     WebIM.conn.open(options);
    // }

    // layui.config({
    //     base: '../../layui/notice/dist/'
    // });
// }



layui.use(['layer', 'notice','element'], function () {
    layer = layui.layer;
    notice = layui.notice;
    element = layui.element;
    notice.options = {
        closeButton: true,//显示关闭按钮
        debug: false,//启用debug
        positionClass: "toast-top-right",//弹出的位置,
        showDuration: "300",//显示的时间
        hideDuration: "1000",//消失的时间
        timeOut: "2000",//停留的时间
        extendedTimeOut: "1000",//控制时间
        showEasing: "swing",//显示时的动画缓冲方式
        hideEasing: "linear",//消失时的动画缓冲方式
        iconClass: 'toast-info', // 自定义图标，有内置，如不需要则传空 支持layui内置图标/自定义iconfont类名
        onclick: null, // 点击关闭回调
    };
});