
  
  const router = require('koa-router')()
  const view = require('../controller/view')
  module.exports=()=>{
    router.get('/',view.index)
    router.get('/home',view.home)
    router.get('/home/:id/:name',view.homeParams)
    router.get('/json',view.json)
    return router
  }