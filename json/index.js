const Koa = require('koa')
const app = new Koa()
const router = require('../分离/router')

const middleware = require('./middleware')

middleware(app)
router(app)
app.listen(3000, () => {
  console.log('json test start_ listen 3000')
})

