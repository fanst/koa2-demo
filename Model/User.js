const {sequelize,Sequelize} =require('../utils/sequelize');

var User = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT(11),
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    Password: Sequelize.STRING(100),
    ename: Sequelize.STRING(100)
    },
    {
        //这个参数为true是MySQL会自动给每条数据添加createdAt和updateAt字段
        timestamps: false,
        //表名不会再加s
        freezeTableName: true
    });

module.exports=User;