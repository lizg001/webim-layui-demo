let channelList = []
$(function () {  
     //拉取会话列表
     $("#channels").click(function (e) { 
        e.preventDefault();
        WebIM.conn.getSessionList().then((res) => {
            console.log(res.data.channel_infos)
            channelList = res.data.channel_infos
            showChannelList(channelList);
        })
    });
})