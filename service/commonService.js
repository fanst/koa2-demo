/*
 * @Author: xujie 
 * @Date: 2018-04-24 19:36:44 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-02 16:02:38
 */
const {sequelize,Sequelize} =require('../utils/sequelize');
const OnlineSessionInfo = require('../Model/OnlineSessionInfo');

var commonService = {
    GetUserInfo: async (ctx) => {
        var sessionkey = ctx.session.dcxt_session;
        
        currentUser = await OnlineSessionInfo.findAll({
            where: {
                key: sessionkey
            }
        });

        return currentUser;
    }
};

module.exports = commonService;