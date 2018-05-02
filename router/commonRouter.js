/*
 * @Author: xujie 
 * @Date: 2018-04-24 14:49:16 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-02 15:09:40
 */

const router = require('koa-router')();
const controller = require('../controller/commonController');

router.get("/getUserInfo",controller.GetUserInfo);

module.exports = router;