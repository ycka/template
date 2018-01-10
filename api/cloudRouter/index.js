var pth = require('../sql').industryList;
var pthS = require('../sql').punishType;
var url = require('url');//url问号传参
module.exports = (router,sql)=>{
    router.post('/api/industryList/:id/:value',(req,res,next)=>{
      console.log(req.params)//restful风格接口
      sql(pth(),(err,val,filed)=>{
            res.send(val)
      })
    })
    router.post('/api/punishType',(req,res,next)=>{
      console.log(req)
      console.log(url.parse(req.url, true).query)
      sql(pthS(),(err,val,filed)=>{
            res.send(val);
            if(err){
              res.send(err)
            }
      })
    })
}