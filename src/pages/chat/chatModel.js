
$(function () {
    //个人中心页面
    $(".side-user-icon").click(function (e) {
        e.preventDefault();
        showCaht.userSetting();
    });

    //拉取会话列表
    $("#channels").click(function (e) {
        e.preventDefault();
        messageApi.getChannels()
    });

    //展示列表
    $("#contact").click(function (e) {
        e.preventDefault();
        groupsApi.getChatgroups();
        // $("#groupList").click();
        // $("#contactList").click();
        userApi.onGetRoster();
    });

    //展示群组列表
    $("#groupList").click(function (e) { 
        e.preventDefault();
        console.log($("#group-list-icon").hasClass("icon-active"));
        if ($("#group-list-icon").hasClass("icon-active")) {
            $("#group-list-icon").removeClass("icon-active");
            $(".group-list").hide();
        }else{
            // groupsApi.getChatgroups();
            $("#group-list-icon").addClass("icon-active");
            $(".group-list").show();
        } 
    });

    //展示联系人列表
    $("#contactList").click(function (e) { 
        e.preventDefault();
        if ($("#contact-list-icon").hasClass("icon-active")) {
            $("#contact-list-icon").removeClass("icon-active");
            $(".contact-list").hide();
        }else{
            // userApi.onGetRoster()
            $("#contact-list-icon").addClass("icon-active");
            $(".contact-list").show();
        }
    });


})



