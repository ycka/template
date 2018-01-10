const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const sql = require('./connection');
const app = express();
const tokenTool = require('./token')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session');
app.use(bodyParser.json());//数据解析
app.use(bodyParser.urlencoded({ extended: true }));//解析url
app.use(cookieParser())//获取cookies

const whitelist = ['http://127.0.0.1:3000', 'http://example2.com']//请求地址来源白名单
//验证token
app.use((req,res,next)=>{//api中间件拦截请求cookie为空返回500，key不为true返回500
    console.log(req.url)
    //if (whitelist.indexOf(req.header('Origin')) !== -1){
        res.header("Access-Control-Allow-Origin", req.header('Origin')); 
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
        res.header("Access-Control-Allow-Credentials","true"); 
        res.header("X-Powered-By",' 3.2.1') 
        res.header("Content-Type", "application/json;charset=utf-8");
        // if(req.cookies.jwt&&req.cookies.jwt.length>=1){
        //     //验证token暂无
        //     // var str = req.cookies.jwt
        //     // console.log(req.cookies.user)
        //     // console.log(str)
        //     // console.log(tokenTool.decodeToken(str))
        //     // var tas = tokenTool.decodeToken(str)
        //     // console.log('checkToken')
        //     // console.log(tokenTool.checkToken(tas))
        //     next()
        // }else{
        //     console.log(1)
        //     if(req.url=='/api/login'){
        //         next()
        //     }else{
        //         res.json(401,{'err':'user does not exist'});
        //     }
            
        // }
        
    // }else{
    //     next('/')
    // }
    // app.use('/',()=>{
    //     res.json(401,{'err':'user does not exist'});
    // })
    
    // if(req.cookies.length>1){
    //   const bandToken = tokenTool.decodeToken(req.cookies.jwt)
    //   const key = tokenTool.checkToken(bandToken)
    //   if(key){
        
    //   }
    // }
    
    next()
})

//跨域
// var whitelist = ['http://127.0.0.1:3000', 'http://example2.com']//白名单
// var corsOptions = {
//   origin: function (origin, callback) {
//       console.log(origin+'origin')
//     //if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     //} else {
//       //callback(new Error('Not allowed by CORS'))
//     //}
//   },
//   optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))



require('./router')(router,sql.do);//企业端dev api接口
require('./cloudRouter')(router,sql.cloudDo);//云端dev api接口
require('./enterproseDo')(router,sql.enterproseDo)//企业端999000 api接口
require('./textDo')(router,sql.textDo)//test库 api接口
require('./nuxt')(router,sql.textDo,tokenTool)
app.use(router);


  
const server = app.listen(3001,function(err){
    if(err){
        console.log(err);
        return
    }
    const host = server.address().address;
    const port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s',host,port);
})

