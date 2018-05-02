/*
 * @Author: xujie 
 * @Date: 2018-04-26 18:09:19 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-01 11:21:55
 */

const User =require('../Model/User');
const content = require('../utils/content');

var loginService = {
    Login: async (ctx,data) => {
        var user = await User.find({
            where: {
                Name: data.userName,
                Password:data.password
            }
        });
        if(user!=null)
        {
            var sessionId=Date.now()+''+user.id;
            ctx.session.dcxt_session=sessionId;

            var userData={
                userId:user.id,
                nickName:user.ename,
                authList:"10010,10020"
            }
            await content.setCurrentUser(ctx,userData);

            return user;
        }
        else{
            return null;
        }
    }
};

module.exports = loginService;