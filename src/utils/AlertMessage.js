
function alertErrorMessage(error) {
    switch (error) {
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
}

function alertMessage(data) {
        switch (data) {
            case regisSuc:
                notice.success(regisSuc);
                $("#goLogin").click();
                break;
            case loginSuc:
                notice.success(loginSuc);
                break;
            default:
                break;
        }
}