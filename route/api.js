const router = require('koa-router')({
  prefix: '/api'
})



  router.get('/',async function(ctx,next){
    
    ctx.response.body={
      code:9527,
      result:{
       use:''
      }
    }
  })
  router.get('/use',async function(ctx,next){
    ctx.response.body={
      code:9527,
      result:{
       use:'11'
      }
    }
  })
  module.exports=router