/*
 * @Author: xujie 
 * @Date: 2018-04-24 19:38:31 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-25 10:55:43
 */

//连接数据库中间件
const Sequelize = require('sequelize');
const config = require('../config/config.index');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var sequelizeUtils={
    Sequelize,
    sequelize
}

module.exports=sequelizeUtils;