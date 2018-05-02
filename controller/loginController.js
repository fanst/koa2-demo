/*
 * @Author: xujie 
 * @Date: 2018-04-26 18:18:11 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-26 18:27:10
 */

const loginService=require('../service/loginService');

var controller = {
    Login: async (ctx, next) => {
        var body = ctx.request.body;
        var loginInfo={
            userName:body.userName,
            password:body.password
        };
        var data = await loginService.Login(ctx,loginInfo);
        if(data!=null){
            ctx.rest(200,true, "登陆成功！", data);
        }
        else{
            ctx.rest(200,false, "用户名或密码错误！");
        }
    }
};

module.exports = controller;