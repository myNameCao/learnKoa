const Koa = require('koa')
const app = new Koa()
const router = require('./route')
const config = require('./config')
const middleware = require('./middleware')



middleware(app)
router(app)






app.listen(config.port, () => {
  console.log(`service have start listening ${config.port}`)
})

