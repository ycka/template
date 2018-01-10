
var pthS = require('../sql').industry
module.exports = (router,sql)=>{
    router.post('/api/travellist',(req,res,next)=>{
      
      sql(pthS(),(err,val,filed)=>{
            res.send(val)
      })
    })
}