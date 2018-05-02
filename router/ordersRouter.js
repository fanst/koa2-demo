/*
 * @Author: xujie 
 * @Date: 2018-04-24 14:49:16 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-26 15:23:36
 */

const router = require('koa-router')();
const controller = require('../controller/ordersController');

router.get("/getOrdersList",controller.GetOrdersList);
router.get("/saveOrder",controller.SaveOrder);

module.exports = router;