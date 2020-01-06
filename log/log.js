const log4js= require('log4js')

const methods = ['trace','debug', 'info','warn','error','fatal','mark']
 
module.exports = ()=>{
 const contextLogger = {};
 log4js.configure({
  appenders:{cheese:{type:'file',filename:'chris.log'}},
  categories:{default:{appenders:['cheese'],level:'info'}}
});
const logger = log4js.getLogger('cheese')

 return async (ctx ,next)=>{
   const start  = Date.now();
   methods.forEach((method,i)=>{
      contextLogger[method] = (message)=>{
        logger[method](message)
      }
   })
   ctx.log = contextLogger;
   await next()
   const end = Date.now()
   const reponseTime = end -  start;
   logger.info(`响应时间为${reponseTime/1000} s`)
 }
}