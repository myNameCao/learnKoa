const fs = require('fs')
const path = require('path')
module.exports= (opts)=>{
let {app,rules=[]} = opts
if(!app){
  throw new Error('app params is necessary')
}
const appKey  = Object.keys(app)


rules.forEach(item=>{
  let {folder,name} = item
  if(appKey.includes(name)){
    throw new Error(`the name of ${name} is alread exists `)

  }
  let content = {}
  fs.readdirSync(folder).forEach(filename=>{
    let extname = path.extname(filename) //  获得扩展名
    if(extname=='.js'){
      let  name = path.basename(filename,extname)
      content[name] = require(path.join(folder,filename))
    }
  })

  app[name] = content

})



}