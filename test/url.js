const koa =require('koa')
const fs = require('fs')
const app = new koa()


function render (page){
 return  new Promise((resolve,reject)=>{
   let viewUrl = `../views/${page}`
   console.log(viewUrl)

   fs.readFile(viewUrl,"binary",(err ,data)=>{
     if(err){
        reject(err)
     }else{
      resolve(data)
     }

   })
 })
}
async function  route(url){
  let  view = '404.html'
  switch ( url ) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/home':
      view = 'home.html'
      break
    default:
      break
  } 

  let html = await render(view)
  return html

}



app.use(async (ctx)=>{
    let url  =ctx.request.url 
    let html = await route(url)
    ctx.body =  html
})
app.listen(3000,function(){
  console.log('listen 3000 ')
})

