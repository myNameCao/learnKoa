const router = require('koa-router')({
  prefix: '/api'
})

router.all('/*', async (ctx,next) => {
  // *代表允许来自所有域名请求
  ctx.set("Access-Control-Allow-Origin", "*");  // 允许跨域
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); //  允许的方法
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');// 允许 head 的字段
  await next();
});
router.post('/sigin',async function(ctx){
  ctx.response.body='登录完成'
})

router.get('/shareInfo',async function(ctx){
  ctx.response.body={
    code:9527,
    result:{
      use:'11'
    }
  }
})
module.exports=router