

const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')
const {database} = require('../config')

module.exports= (app)=>{
        let store = new MysqlSession(database)
        let cookie = {
          maxAge: '', // cookie有效时长
          expires: '',  // cookie失效时间
          path: '', // 写cookie所在的路径
          domain: '', // 写cookie所在的域名
          httpOnly: '', // 是否只用于http请求中获取
          overwrite: '',  // 是否允许重写
          secure: '',
          sameSite: '',
          signed: false,
        }
        app.use(session({
          key: 'SESSION_ID',
          store: store,
          cookie: cookie
        })) // 内部设置中间件
      // 设置session
        return  async  function(ctx,next){
          if ( ctx.url === '/home' ) {
          ctx.session = {
            user_id: Math.random().toString(36).substr(2),
            count: 0
          }
        } else if ( ctx.url === '/' ) {
          ctx.session.count = ctx.session.count + 1

        } 
        await next()
      }
}