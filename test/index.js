const Koa = require('koa')
const app = new Koa()

//  context  挂载 代理
//  请求代理的注入

// 直接被 app.use 
// 请求时候才注入
// 每次请求的注入都不同

const middleware = async function (ctx,next){
ctx.getServerInfo= function(){
  function parseMem( mem = 0 ){
    let memVal = mem /1024/1024 ;
    memVal =memVal.toFixed(2)+'MB'
    return  memVal
  };
  function getMemInfo (){
    let memUsage  = process.memoryUsage();// node 进程 内存的使用 情况  
    let rss = parseMem(memUsage.rss);
    let heapTotal = parseMem(memUsage.heapTotal)// 内存的使用情况 
    let heapUsed = parseMem (memUsage.heapUsed)
    return {
      pid:process.pid,
      rss,
      heapTotal,
      heapUsed
    }
  }
  return  getMemInfo()
 }
 await next ()

};
const page = async function  (ctx,next){
  const serverInfo = ctx.getServerInfo();
  ctx.body = `
  <html>
  <head><head>
  <body>
  <h1>${JSON.stringify(serverInfo)}</h1>
  </body>
  </html>
  `
}
app.use(middleware)
app.use(page)
app.listen(3000, () => {
  console.log('service have start listening 3000')
})

