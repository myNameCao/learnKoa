module.exports= () => {



  return async function(ctx,next){
    if(ctx.url==='/home'){
      ctx.cookies.set(
        'name', 
        'chris',
        {
          domain: 'localhost',  // 写cookie所在的域名
          path: '/home',       // 写cookie所在的路径
          maxAge: 10 * 60 * 1000, // cookie有效时长
          expires: new Date('2020-01-20'),  // cookie失效时间
          httpOnly: false,  // 是否只用于http请求中获取
          overwrite: false  // 是否允许重写
        }
      )

    }
    await  next()
    
  }
}