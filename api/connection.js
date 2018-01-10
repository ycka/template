var mysql = require('mysql');
var config = require('../config')
var pool = mysql.createPool(config.mysql)
config.mysql.database = 'capital_cloud_dev';
var cloudPool = mysql.createPool(config.mysql)
config.mysql.database = 'capital_enterprise_999000';
var enterprisePool = mysql.createPool(config.mysql)
config.mysql.database = 'test';
var textPool = mysql.createPool(config.mysql)

exports.do = (sql, callback)=>{//企业端dev
    pool.getConnection((err, connection)=>{
        connection.query(sql, function (){
            callback.apply(connection, arguments);
            connection.release();
        });
    })
}

exports.cloudDo = (sql, callback)=>{//云端dev
    cloudPool.getConnection((err, connection)=>{
        connection.query(sql, function (){
            callback.apply(connection, arguments);
            connection.release();
        });
    })
}

exports.enterproseDo = (sql, callback)=>{//企业端999000
    enterprisePool.getConnection((err, connection)=>{
        connection.query(sql, function (){
            callback.apply(connection, arguments);
            connection.release();
        });
    })
}

exports.textDo = (sql, callback)=>{//test库
    //console.log(config.mysql.database)
    textPool.getConnection((err, connection)=>{
        connection.query(sql, function (){
            callback.apply(connection, arguments);
            connection.release();
        });
    })
}
// module.exports = {
//     pool:pool,
//     mysql:mysql,
//     handleDisconnect:function(){
//         console.log('定时中')
//         var connection = mysql.createConnection(config.mysql);                                  
//         connection.connect(function(err) {              
//             if(err) {                                     
//                 console.log("进行断线重连：" + new Date());
//                 setTimeout(this.handleDisconnect, 2000);   //2秒重连一次
//                 return;
//             }         
//             console.log("连接成功");  
//         });                                                                           
//         connection.on('error', function(err) {
//             console.log('db error', err);
//             if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//                 this.handleDisconnect();                         
//             } else {                                      
//             throw err;                                 
//             }
//         });
//         // pool = mysql.createPool(config.mysql);
//         // handleDisconnect = this.handleDisconnect
//         // setTimeout(handleDisconnect, 2000);

//     },
//     query:function(sql,sql_updata,callback){
//         pool.getConnection(function(err,conn){  
//             console.log('链接成功')
//             if(err){  
//                 console.log(err)
//                 callback(err,null,null);  
//             }else{  
//                 console.log(1)
//                 conn.query(sql,sql_updata,function(qerr,retsult,fields){  
//                     //释放连接  
//                     conn.release();  
//                     //事件驱动回调  
//                     callback(qerr,retsult,fields);  
//                 });  
//             }  
//         });  
//     }
// }