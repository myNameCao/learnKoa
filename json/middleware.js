const send = require('./send.js')

const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

module.exports= (app)=>{
app.use(staticFiles(path.resolve(__dirname,'../public')))
app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, '../views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}));

  app.use(send())
  app.use(bodyParser())
}