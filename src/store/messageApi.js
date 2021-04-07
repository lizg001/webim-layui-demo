let channelList = [];   //会话列表储存

let messageApi = {
    //获取会话列表
    getChannels: () => {
        WebIM.conn.getSessionList().then((res) => {
            channelList = res.data.channel_infos
            showCaht.showChannelList(channelList)
        })
    }

}