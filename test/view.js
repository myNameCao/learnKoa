 const path = require('path')
 const fs = require('fs')
 function view (app,opts = {}){
   const {BaseDir = ''} = opts
   app.context.view = function (page = '', obj = {}){
     let  ctx = this ;
     let filePath =  path.join(BaseDir,page)
   
     if(fs.existsSync(filePath)){
       let  tpl = fs.readFileSync(filePath,'binary')
       ctx.body = tpl

     }else{
       ctx.throw (404)
     }
   }
  
 }




 const  koa  =  require('koa')

 const  app = new  koa()
 view(app, {BaseDir: path.join(__dirname,'../views')})
 
 app.use(async ctx => {
   await ctx.view(`${ctx.path}.html`,{title:'index page'})
 })


 app.listen(3000,()=>{
   console.log('300 view')
 })