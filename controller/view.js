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
    json:async (ctx,next)=>{
      ctx.send({
        status: 'success',
        data: 'hello ikcmap'
      })
    }
 }