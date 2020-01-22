module.exports={
    shareInfo:async ctx => {
            ctx.response.body={
              code:9527,
              result:{
                use:'11'
              }
            }
    },
    sigin:async ctx => {
      const {telphone,name} = ctx.request.body
      ctx.response.body={
        userId:'66666',
        name:name,
        telphone:telphone,
        message:'holle word '
      }
    }
 }