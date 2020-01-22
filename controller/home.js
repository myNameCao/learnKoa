module.exports={
    index:async (ctx,next)=>{
      ctx.response.body=`<h1>index Chris page </h1>`
    },
    home:async (ctx,next)=>{
       ctx.response.body=`<h1>home page <h1/>`
    },
    homeParams:async (ctx,next)=>{
       ctx.response.body=`home page id=${ctx.params.id}  name = ${ctx.params.name}`
    },
    register:async (ctx,next)=>{
      let {name, password} = ctx.request.body
      if( name == 'ikcamp' && password == '123456' ){
        ctx.response.body = `Hello， ${name}！` 
      }else{
        ctx.response.body='错误熊希'
      }
    },
    json:async (ctx,next)=>{
      ctx.send({
        status: 'success',
        data: 'hello ikcmap'
      })
    }
 }