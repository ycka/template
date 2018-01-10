const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const app = express();
app.use(express.static('public'));
//app.use(express.static('client'));
 
// Add middleware for http proxying
const apiProxy = proxy('/api/', { target: 'http://localhost:3000',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
app.use('/api/*', apiProxy);//api子目录下的都是用代理
 
// Render your site
app.get('/index.htm', function(req,res){
     res.sendFile(__dirname+'../index.html');
});
 
 
 
app.listen(8000, () => {
  console.log('Listening on: http://localhost:8000');
});