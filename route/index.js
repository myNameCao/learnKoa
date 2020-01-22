//  router  的分离

var router = require('koa-router')();
const viewRouter= require('./view')
const apiRouter= require('./api')

module.exports=(app)=>{
  app.use(viewRouter(app).routes()).use(apiRouter.routes()).use(router.allowedMethods())
}