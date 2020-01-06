const log4js= require('log4js')
module.exports = ()=>{
 return async (ctx ,next)=>{
   const start  = Date.now();
   log4js.configure({
     appenders:{cheese:{type:'file',filename:'chris.log'}},
     categories:{default:{appenders:['cheese'],level:'info'}}
   });
   const logger = log4js.getLogger('cheese')
   await next()
   const end = Date.now()
   const reponseTime = end -  start;
   logger.info(`响应时间为${reponseTime/1000} s`)
 }
}