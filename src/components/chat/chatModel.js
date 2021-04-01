
$(function () {  
    //个人中心页面
    $(".side-user-icon").click(function (e) { 
        e.preventDefault();
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
            btn:['退出登陆'],
            yes: function () {
                WebIM.conn.close();
                layer.closeAll();
            },
        });  
    });
})

function showChannelList(channelList) {  
    let channel_list = ''
    channelList.map(function (item) {  
        let channel_id = getUserId(item.channel_id)
        return channel_list +=
            `<li id =  ${channel_id} class="item-channel">
          <span > ${channel_id} </span>  
          <div > ${123} </div>
          </li>`
    })
    $('.channel-list')[0].innerHTML = channel_list;
}

