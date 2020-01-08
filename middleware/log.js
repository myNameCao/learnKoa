const log4js= require('log4js')

const methods = ['trace','debug', 'info','warn','error','fatal','mark']
 
module.exports = ()=>{
 const contextLogger = {};
 log4js.configure({
  appenders:{cheese:{type:'file',filename:'.log/chris.log'}},
  categories:{default:{appenders:['cheese'],level:'info'}}
});
const config = {
  appenders: {
    cheese: {
     type: 'dateFile', // 日志类型 
     filename: `chris`,  // 输出的文件名
     pattern: '-yyyy-MM-dd.log',  // 文件名增加后缀
     alwaysIncludePattern: true   // 是否总是有后缀名
   }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level:'info'
    }
  }
}



const logger = log4js.getLogger('cheese')

 return async (ctx ,next)=>{
  const start  = Date.now();
  log4js.configure(config) 
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