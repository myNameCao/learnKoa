const methods = [
  'GET',
  'PUT',
  'PATCH',
  'POST',
  'DELETE',
]

 class Layer {
   constructor(path,methods,middlewart,opts){
     this.path = path 
     this.methods = methods
     this.middlewart = middlewart
     this.opts = opts
   }
 }

 class Router {
   constructor (opts = {}){
     this.stack = []
   }
   register (path,methods,middlewart,opts){
     let router = new Layer(path,methods,middlewart,opts)
     this.stack.push(router)
     return this 
   }
   routes (){
     let stock= this.stack
     return async function (ctx,next){
       let currentPath = ctx.path
       let route 
       for(let i =0;i<stock.length;i++){
         let item = stock[i]
         if(currentPath == item.path&& item.methods.indexOf(ctx.method)>=0){
           route = item.middlewart
           break
         }
       }
       if(typeof route ==='function'){
         route(ctx,next)
         return 
       }
       await next()
     }
   }
 }

methods.forEach(method =>{
  Router.prototype[method.toLowerCase()]=Router.prototype[method] = function(path,middlewart){
    this.register(path,[method],middlewart)
  }
})


const Koa  = require('koa')
const app =  new Koa()

const router  = new Router()



router.get('/index',async ctx =>{ ctx.body = 'index page'})
router.get('/post',async ctx =>{ ctx.body = 'post page'})
router.get('/list',async ctx =>{ ctx.body = 'list  page'})
router.get('/item',async ctx =>{ ctx.body = 'item  page'})

app.use(router.routes())

app.use(async ctx=>{
ctx.body = '404'
})


app.listen(3000,function(){
  console.log(3000 ,'router listen')
})


