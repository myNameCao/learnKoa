//  router  的分离


const router = require('koa-router')()
const controller=require('./controller')

module.exports=(app)=>{
  router.get('/',controller.index)

  router.get('/home',controller.home)

  router.get('/home/:id/:name',controller.homeParams)
  router.get('/user',controller.login )
   router.post('/user/register',controller.register)

  app.use(router.routes()).use(router.allowedMethods())

}