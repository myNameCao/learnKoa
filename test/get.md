##  get  请求获得数据

###  使用方法  

+  在上下文中获得 
 
 cxt[query]  {a:1,b:1}
 cxt[querystring] a=1&b=2

+ 在cxt[request] 中获得 

cxt.request.query {a:1,b:2}

cxt.request.querystring a=1&b=2