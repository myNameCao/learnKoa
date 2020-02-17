# czb_h5



##  项目的配置文件 urlConfig    

包含 项目的基本文件   


##   ajax 请求  

``` js 

import ajax from '@lib/axios_dd'
ajax({
      type:'POST',// 默认是get   
      data:{},//  数据  
      url:'findBalance',//  地址的索引  
      success:function(res){//   成功后的操作 
              console.log(res)
      }
 })
```
lib/urlConfig   配置索引 

```json  

"path":{
 "login":"/begin/platformLogin",
 "findBalance":"/gas/getOilNumList"
}
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
 


### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
