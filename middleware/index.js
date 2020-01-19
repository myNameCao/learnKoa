const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const miSend = require('./send')
const cookie = require('./cookie')
const sessionRole = require('./session')
// 引入日志中间件
const miLog = require('./log')
const rule = require('./rule')

module.exports = (app) => {
  // 注册中间件
  app.use(miLog())
  app.use(miSend())
  app.use(cookie())
  
  // app.use(sessionRole(app))
  rule({
    app,
    rules:[
      {
        folder:path.join(__dirname,'../controller'),
        name:'controller',
      },
      {
        folder:path.join(__dirname,'../service'),
        name:'service',
      },

    ]
  })
  app.use(staticFiles(path.resolve(__dirname, "../public")))
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));
  app.use(bodyParser())
  
}