/*
 * @Author: xujie 
 * @Date: 2018-04-20 16:58:54 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-02 16:16:40
 */

const Koa = require('koa');
const router = require('./router/index');
//获取请求参数中间件
const bodyparser = require('koa-bodyparser');
//自定义规范接口返回值中间件
const rest =require('./utils/rest');
const session = require('koa-session');

const cors =require('koa-cors');

const app = new Koa();

//设置Access-Control-Allow-Credentials:true，表示跨域时，允许cookie添加到请求中
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