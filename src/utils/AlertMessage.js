
let messageNotice = {
    alertErrorMessage(error){
        console.log("错误提示",error);
        switch (error) {
            case "the user cannot be empty":
                notice.error("用户名未输入！")
                break;
            case "username or password is null":
                notice.error("用户名或密码为空！")
                break;
            case "invalid password":
                notice.error("账号密码错误！")
                break;
            case "user not found":
                notice.error("用户不存在！")
                break;
            case "duplicate_unique_property_exists":
                notice.error("用户ID已存在，请更换ID注册！")
                break
            case "illegal_argument":
                notice.error("用户不合法！")
                break;
            case "unauthorized":
                notice.error("注册失败，无权限！")
                break;
            case "resource_limited":
                notice.error("您的App用户注册数量已达上限,请升级至企业版！")
                break
            default:
                break;
        }
    },
    alertMessage(data) {
        console.log("成功提示：",data);
        switch (data) {
            case "registerSuc":
                notice.success("注册成功");
                $("#goLogin").click();
                break;
            case "loginSuc":
                notice.success("登陆成功");
                break;
            default:
                break;
        }
}
}
