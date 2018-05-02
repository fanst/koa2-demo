/*
 * @Author: xujie 
 * @Date: 2018-04-24 14:49:16 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-26 18:29:38
 */

const router = require('koa-router')();
const controller = require('../controller/loginController');

router.post("/login",controller.Login);

module.exports = router;