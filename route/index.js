//  router  的分离

var router = require('koa-router')();
const viewRouter= require('./view')
const apiRouter= require('./severApi')

module.exports=(app)=>{
  app.use(viewRouter.routes()).use(apiRouter.routes()).use(router.allowedMethods())
}