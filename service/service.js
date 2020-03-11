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
    },
    checkName:async ctx => {
      const {telphone,nameEn,nameCn} = ctx.request.body
      ctx.response.body={
        code:200,
        userId:'66666',
        name:nameEn,
        telphone:telphone,
        message:'holle word '
      }
    }
 }