// app.context 是 从其 创建 ctx 的原型 

const Koa = require('koa')
const app = new Koa()

app.context.db=function(){
  return  1
};
app.use(async  ctx=>{
  ctx.body='hello wordle'
})

app.use(async (ctx, next) => {
  ctx.assert(ctx.request.accepts('png'), 406);
  // 相当于:
  // if (!ctx.request.accepts('xml')) ctx.throw(406);
  await next();
});

app.listen(3000,function(){
   console.log("app serve runing ")
})


//错误的处理  添加一个 error 事件侦听器
app.on('error', err => {
  log.error('server error', err)
});


// context  上下文



// koa   实现 中间件的方法  两种方式 

// async function  

// common function  


// async 
app.use(async (ctx,next)=>{
const start = Date.now();
  await next();
  const ms= Date.now()-start;
  console.log(`${ctx.method} ${ctx.url} - ${ms} ms`)
})

// common function 


app.use((cxt,next)=>{

  const start = Date.now();
  return next().then(() => {
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });

})





