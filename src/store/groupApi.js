let groupsList = [];    //群组列表储存
let groupsApi = {
    getChatgroups: () => {
        WebIM.conn.getGroup(WebIM.conn.context.userId).then((res) => {
            groupsList = res.data;
            showCaht.showGroupList(groupsList);
            $("#groupList").click();
        })
    }
}