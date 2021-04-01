
//获取userId
function getUserId(str) {
    // console.log('name', str)
    if (typeof str !== "string") return ""
    return (
      str.match(/chatdemoui_(\S*)@|chatdemoui_(\S*)/)[1] ||
      str.match(/chatdemoui_(\S*)@|chatdemoui_(\S*)/)[2]
    )
  }



//初始化IM SDK
var conn = {};
WebIM.config = config;
conn = WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    host: WebIM.config.Host,
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: WebIM.config.isAutoLogin,
    isDebug: WebIM.config.isDebug,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    isStropheLog: WebIM.config.isStropheLog,
    delivery: WebIM.config.delivery,
    useOwnUploadFun: WebIM.config.useOwnUploadFun
})