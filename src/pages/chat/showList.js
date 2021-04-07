
let userImg = '../../../images/theme2x.png';  //默认个人头像
let groupImg = '../../../images/groupTheme2.png';  //默认群组头像
let showCaht = {
    //展示个人信息
    userSetting: () => {
        layer.open({
            // formType: 2,
            content: `<div>
                <div>
                    <img src="../../../images/loginIcon.png" class="icon-userpic" />
                    <span style="font-size:18px;">我是用户名</span>
                </div>
                <h4>黑名单</h4>
            </div>`,
            title: ['个人中心', 'font-size:25px'],
            area: ['400px', '280px'],
            btnAlign: 'l',
            btn: ['退出登陆'],
            yes: function () {
                WebIM.conn.close();
                layer.closeAll();
            },
        });
    },

    //渲染会话列表
    showChannelList: (channelList) => {
        console.log('会话列表', channelList.length);
        if (channelList.length != 0) {
            $("#no-channels").removeClass("no-channels");
            let channel_list = ''
            channelList.map(function (item) {
                let channel_id = getUserId(item.channel_id);
                let msgTime = "12:12";
                let type = item.channel_id.split('@')[1];
                let msgType = JSON.parse(item.meta.payload).bodies[0].type;
                let newMsg;
                switch (msgType) {
                    case "txt":
                        newMsg = JSON.parse(item.meta.payload).bodies[0].msg;;
                        break;
                    case "audio":
                        newMsg = "[音频消息]"
                        break;
                    case "video":
                        newMsg = "[视频消息]"
                        break;
                    case "img":
                        newMsg = "[图片消息]"
                        break;
                    case "file":
                        newMsg = "[文件消息]"
                        break;
                    default:
                        break;
                }
                if (type === "easemob.com") {
                    return channel_list +=
                        `<li id=${channel_id} class="item-channel">
                    <div>
                        <img src=${userImg} class="user-img"/>
                    </div>
                    <div class="user-msg">
                        <span class="new-msg-id"> ${channel_id} </span>
                        <span class="new-msg-time">${msgTime}</span>  
                        <p class="new-msg-text"> ${newMsg} </p>
                    </div>
                </li>`
                } else if (type === "conference.easemob.com") {
                    return channel_list +=
                        `<li id=${channel_id} class="item-channel">
                    <div>
                        <img src=${groupImg} class="user-img"/>
                    </div>
                    <div class="user-msg">
                        <span class="new-msg-id"> ${channel_id} </span>
                        <span class="new-msg-time">${msgTime}</span>  
                        <p class="new-msg-text"> ${newMsg} </p>
                    </div>
                </li>`
                }
            })
            $('.channel-list')[0].innerHTML = channel_list;
        } else {
            $("#no-channels")[0].innerHTML = "没有会话";
            $("#no-channels").addClass("no-channels");
        }

    },

    //渲染群组
    showGroupList: (groupsList) => {
        console.log(groupsList.length, "11");
        let group_list = '';
        groupsList.map(function (item) {
            let { groupid, groupname } = item
            return group_list +=
                `<li id=${groupid} class="item-channel">
                    <div>
                        <img src=${groupImg} class="list-img"/>
                    </div>
                    <div class="list-id">
                        <span> ${groupname} </span>
                    </div>
                </li>`
        })
        $('.group-list')[0].innerHTML = group_list;
        $('.group-num')[0].innerHTML = groupsList.length;
    },

    //渲染联系人
    showContactList: (usersList) => {
        let contact_list = '';
        usersList.map(function (item) {
            return contact_list +=
                `<li id=${item} class="item-channel">
                    <div>
                        <img src=${userImg} class="list-img"/>
                    </div>
                    <div class="list-id">
                        <span> ${item} </span>
                    </div>
                </li>`
        })
        $('.contact-list')[0].innerHTML = contact_list;
        $('.contact-num')[0].innerHTML = usersList.length;
    }
}