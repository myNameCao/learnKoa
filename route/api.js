const router = require('koa-router')({
  prefix: '/api'
})

router.all('/*', async (ctx,next) => {
  // *代表允许来自所有域名请求
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});
router.get('/',async function(ctx){
  ctx.response.body={
    code:9527,
    result:{
      use:''
    }
  }
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