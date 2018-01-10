
var pthS = require('../sql').travellist
module.exports = (router,sql)=>{
    router.post('/api/testTravellist',(req,res,next)=>{
      //console.log(req.body.data)
      const datas =req.body.data;
      const list = null;
      // for(var i=0;i<datas.length;i++ ){
      //   console.log(typeof datas[0])
      //   list = datas[i];
      //   console.log(list)
      //   res.send(list)
      // }
      datas.forEach(function(element) {
        //console.log(element)
        sql(pthS(element),(err,val,filed)=>{
          if(err){
            console.log(err);
            res.send(err)
          }else{
            res.send('成功')
          }
         
        })
      });
      
      // sql(pthS(),(err,val,filed)=>{
      //       //res.send(val)
      // })
    })
}