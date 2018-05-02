/*
 * @Author: xujie 
 * @Date: 2018-04-24 15:02:36 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-26 18:45:02
 */

const { sequelize, Sequelize } = require('../utils/sequelize');
const OnlineSessionInfo = require('../Model/OnlineSessionInfo');

const content = {
    getCurrentUser: async (ctx) => {
        if (!ctx.session.dcxt_session) {
            return null;
        }
        else {
            var sessionkey = ctx.session.dcxt_session;
            var currentUser = null;

            currentUser = await OnlineSessionInfo.findAll({
                where: {
                    key: sessionkey
                }
            });

            return currentUser;
        }
    },

    setCurrentUser: async (ctx, data) => {
        var sessionkey = ctx.session.dcxt_session;

        var res = await OnlineSessionInfo.create({
            key: sessionkey,
            userId: data.userId,
            nickName: data.nickName,
            authList: data.authList
        });

        return res;
    },

    checkIsOnline:async(ctx)=>{
        if (!ctx.session.dcxt_session) {
            return false;
        }
        else {
            var sessionkey = ctx.session.dcxt_session;

            var currentUser = await OnlineSessionInfo.findAll({
                where: {
                    key: sessionkey
                }
            });
            if(currentUser.length>0){
                return true;
            }
            else{
                return false;
            }
        }
    }
};

module.exports = content;