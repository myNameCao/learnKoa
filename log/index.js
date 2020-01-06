const Koa = require('koa')
const app = new Koa()

const middleware = require('./middleware')

middleware(app)
app.listen(3000, () => {
  console.log('log test start listening 3000')
})

