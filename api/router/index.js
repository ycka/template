var pth = require('../sql').user;
module.exports = (router,sql)=>{
    router.post('/api/user',(req,res,next)=>{
      //if (!req.body) return res.sendStatus(400);
      console.log(1)
      console.log(pth)
      var user = '';
      console.log(req.body)
      var keys = Object.keys(req.body);
      console.log(keys)
      if(keys<=0){
        user = pth().all;
      }else{
        user = pth(req.body[keys[0]],req.body[keys[1]]).key;
      }
      
      sql(user,(err,val,filed)=>{
          //console.log(val)
          //console.log(err);
          //console.log(filed)
          console.log(val)
            res.send(val)
      })
    })
    // router.post('/nav',(req,res)=>{
    //     console.log(req.url)
    //     res.send('success')
    // })
}