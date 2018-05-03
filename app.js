/*
 * @Author: xujie 
 * @Date: 2018-04-20 16:58:54 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-03 16:36:55
 */

const Koa = require('koa');
const router = require('./router/index');
//获取请求参数中间件
const bodyparser = require('koa-bodyparser');
//自定义规范接口返回值中间件
const rest =require('./utils/rest');
const session = require('koa-session');

const cors =require('koa2-cors');

const app = new Koa();

//cors详解 https://www.cnblogs.com/yanglang/p/6720887.html
//Access-Control-Allow-Credentials为服务端标识浏览器请求CORS时是否可以附带身份凭证，对于附带身份凭证的请求，服务器不得设置 Access-Control-Allow-Origin 的值为“*”。
app.use(cors({
  credentials: true, 
  origin: 'http://localhost:9090', // web前端服务器地址
}));

//使其支持text传值
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }));

//设置接口返回格式（对/api路径的接口做处理）
app.use(rest.restify('/api'));

//?
app.keys = ['some secret hurr'];

app.use(session({key:'dcxt_session'},app));

//接口路由
app.use(router.routes(), router.allowedMethods());

//todo 错误日志

// app.use(async (ctx,next)=>{
//     ctx.response.body = '<h1>Index</h1>';
// });

app.listen(3000);