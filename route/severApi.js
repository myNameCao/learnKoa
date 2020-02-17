const router = require('koa-router')({
  prefix: '/api'
});
const service = require('../service/service')

router.all('/*', async (ctx,next) => {
  // *代表允许来自所有域名请求
  ctx.set("Access-Control-Allow-Origin", "*");  // 允许跨域
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); //  允许的方法
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');// 允许 head 的字段
  await next();
});


router.post('/sigin',service.sigin)
router.get('/shareInfo',service.shareInfo)



module.exports=router