
  
  const router = require('koa-router')()
  const view = require('../controller/view')

  router.get('/',view.index)
  router.get('/home',view.home)
  router.get('/home/:id/:name',view.homeParams)
  router.get('/json',view.json)
  
  module.exports=router
