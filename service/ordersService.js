/*
 * @Author: xujie 
 * @Date: 2018-04-24 19:36:44 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-26 18:53:52
 */
const {sequelize,Sequelize} =require('../utils/sequelize');
const User =require('../Model/User');


const content = require('../utils/content');

var ordersService = {
    GetOrdersList: async (ctx) => {

        //  var res = await sequelize.query('select name,Password from user where id = :id', {  
        //     replacements : {  
        //         id : '1' 
        //     },  
        //     type : Sequelize.QueryTypes.SELECT //指定查询类型  
        // });

        var currentUser = await content.getCurrentUser(ctx);
        if(currentUser!=null){
            
        }

    },
    SaveOrder:async(ctx)=>{
        
    }
};

module.exports = ordersService;