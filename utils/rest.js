/*
 * @Author: xujie 
 * @Date: 2018-04-25 13:19:09 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-27 19:54:53
 */

//使用rest 规范返回格式和统一处理
module.exports = {
    restify: (pathPrefix) => {
        pathPrefix = pathPrefix || '/api'
        return async(ctx, next) => {
            if (ctx.request.path.startsWith(pathPrefix)) {
                ctx.rest = (code,state, msg, data) => {
                    ctx.response.type = 'application/json',
                    ctx.response.body = {
                        code,
                        state,
                        msg,
                        data
                    }
                }
                try {
                    await next();
                    //可以加统一预处理
                } 
                catch (e) {
                    //统一处理
                    // 记录日志
                    console.log(e);
                }
            } 
            else 
            {
                await next();
            }
        }
    }
}