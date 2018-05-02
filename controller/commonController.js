/*
 * @Author: xujie 
 * @Date: 2018-04-24 14:49:22 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-02 16:05:45
 */

const commonService=require('../service/commonService');

var controller = {
    GetUserInfo: async (ctx, next) => {
        var data = await commonService.GetUserInfo(ctx);
        ctx.rest(200, true,"success", data);
    }
};

module.exports = controller;