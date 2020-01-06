const  Koa  =require('koa')
const router = require('koa-router')()
const app = new Koa()


router.get('/',async (ctx,next)=>{
  ctx.response.body=`<h1> index page </h1>`
  await next();
})
router.get('/home',async (ctx,next)=>{
  ctx.response.body=`<h1> HOME page </h1>`
})
router.get('/404',async (ctx,next)=>{
  ctx.response.body=`<h1> 404 page </h1>`
})

router.all('/', async (ctx, next) => {
  // *代表允许来自所有域名请求
  console.log('match "all" method')
  
  ctx.set("Access-Control-Allow-Origin", "*");
 
  // 其他一些设置...
  await next();
});
app.use(router.routes())

app.listen(3000,()=>{
console.log('serve is runing 3000')
})