var pth = require('../sql').user;
module.exports = (router,sql,tokenTool)=>{
    router.get('/api/nav', (req,res,next)=>{
        const data = [
            //父级
            {'name':'公司事务','id':'2','pid':null,'path':null,'dec':1},
            {'name':'信息披露','id':'3','pid':null,'path':null,'dec':2},
            {'name':'监管动态','id':'4','pid':null,'path':null,'dec':3},
            {'name':'投资者关系','id':'5','pid':null,'path':null,'dec':4},
            {'name':'资本运作','id':'6','pid':null,'path':null,'dec':5},
            {'name':'舆情监控','id':'7','pid':null,'path':null,'dec':6},
            //子集
            {'name':'事项管理','id':'17','pid':'2','path':'/managementItems','dec':1},
            {'name':'我的任务','id':'18','pid':'2','path':'/task','dec':2},
            {'name':'会议管理','id':'19','pid':'2','path':'/meeting','dec':3},
            {'name':'关联交易','id':'10','pid':'2','path':'/transaction','dec':4},
            {'name':'交易合规','id':'111','pid':'2','path':'/compliance','dec':5},
            {'name':'规章制度','id':'122','pid':'2','path':'/rules','dec':6},
            {'name':'函件管理','id':'133','pid':'2','path':'/managementLetter','dec':7},
            {'name':'文件管理','id':'144','pid':'2','path':'/managementFile','dec':8},
            {'name':'公告检索','id':'155','pid':'3','path':'/announcement','dec':1},
            {'name':'信息披露','id':'166','pid':'3','path':'/declare','dec':2},
            {'name':'信披智库','id':'177','pid':'3','path':'/train','dec':3},
            {'name':'法律法规','id':'188','pid':'4','path':'/regulations','dec':1},
            {'name':'合规问答','id':'199','pid':'4','path':'/complianceAndAnswer','dec':2},
            {'name':'监管动态','id':'100','pid':'4','path':'/regulatory','dec':3},
            {'name':'违规案例','id':'121','pid':'4','path':'/violationCases','dec':4},
            {'name':'监管函件','id':'123','pid':'4','path':'/regulatoryLetter','dec':5},
            {'name':'监管通知','id':'124','pid':'4','path':'/regulatoryNotice','dec':6},
            {'name':'理脉检索','id':'125','pid':'4','path':'/searchingPulse','dec':7},
            {'name':'市场资讯','id':'126','pid':'5','path':'/marketInformation','dec':1},
            {'name':'IR管理','id':'127','pid':'5','path':'/ir','dec':3},
            {'name':'机构调研','id':'128','pid':'5','path':'/institutional','dec':4},
            {'name':'研究报告','id':'129','pid':'5','path':'/researchReport','dec':4},
            {'name':'互动问答','id':'131','pid':'5','path':'/askAndanswer','dec':5},
            {'name':'股东分析','id':'132','pid':'5','path':'/shareholderAnalysis','dec':6},
            {'name':'案例解析','id':'134','pid':'6','path':'/caseAnalysis','dec':1},
            {'name':'价值干货','id':'135','pid':'6','path':'/valueDryGoods','dec':2},
            {'name':'融资数据','id':'136','pid':'6','path':'/financingData','dec':3},
            {'name':'市场舆情','id':'137','pid':'7','path':'/marketSentiment','dec':1},
          ]
          console.log('api/nav')
        res.send(data);
    });
    router.post('/api/login',(req,res,next)=>{
        if(req.body){
            res.send(tokenTool.createToken(req.body.password))
        }else{
            res.json(401,{'err':'user does not exist'})
        }
    
    })
    router.post('/api/task',(req,res,next)=>{
        

        console.log('task')
        res.send('1')
    })
}