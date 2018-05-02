/*
 * @Author: xujie 
 * @Date: 2018-04-24 14:36:36 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-02 15:10:16
 */

//koa-router的语句最后的()是函数调用
const router = require('koa-router')();
const ordersRouter = require("./ordersRouter");
const loginRouter = require("./loginRouter");
const commonRouter = require("./commonRouter");

const content=require('../utils/content');

// 登陆鉴权
const validate = async(ctx, next) => {
    var isOnline=await content.checkIsOnline(ctx);
    if(isOnline){
        await next();
    }
    else{
        ctx.rest(1001,200,false, "请先登陆!");
    }
};

router.use("/api/login",loginRouter.routes(),loginRouter.allowedMethods());
router.use("/api/orders",validate,ordersRouter.routes(),ordersRouter.allowedMethods());
router.use("/api/common",validate,commonRouter.routes(),commonRouter.allowedMethods());

module.exports = router;



