/*
 * @Author: xujie 
 * @Date: 2018-04-24 14:49:22 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-26 15:01:58
 */

const orderService=require('../service/ordersService');

var controller = {
    GetOrdersList: async (ctx, next) => {
        var data = await orderService.GetOrdersList(ctx);
        ctx.rest(200, "success", { orders: [{ id: 1002, "time": "2018-04-24" }, { id: 1003, "time": "2018-04-24" }] });
    },

    SaveOrder:async (ctx,next)=>{
        var id=ctx.request.query;
        var body = ctx.request.body;
        console.log(body);

        orderService.SaveOrder(ctx);
    }
};

module.exports = controller;