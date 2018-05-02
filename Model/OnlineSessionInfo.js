const { sequelize, Sequelize } = require('../utils/sequelize');

var OnlineSessionInfo = sequelize.define('OnlineSessionInfo', {
    Id: {
        type: Sequelize.BIGINT(11),
        autoIncrement: true,
        primaryKey: true
    },
    key: Sequelize.STRING(100),
    nickName: Sequelize.STRING(100),
    userId: Sequelize.BIGINT(11),
    authList: Sequelize.STRING(100)
},
    {
        //这个参数为true是MySQL会自动给每条数据添加createdAt和updateAt字段
        timestamps: false,
        //表名不会再加s
        freezeTableName: true
    });

module.exports = OnlineSessionInfo;