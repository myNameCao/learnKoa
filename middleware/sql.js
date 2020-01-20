const mysql = require('mysql')
const fs = require('fs');
const path = require('path')
const {database} = require('../config')




const pool = mysql.createPool(database)

let  query = function(sql,values){
  return new Promise((resolve,reject)=>{
    pool.getConnection(function(err,connection){
      if(err){
        reject(err)
      }else{
       connection.query(sql,values,(err,rows)=>{
            if(err){
              reject(err)
            }else{
              resolve(rows)
            }
            connection.release()
       }) 
      }
    })

  })
}

const walkFile = function(  ){
  let pathResolve = path.resolve(__dirname,'../sql/') 
  let files = fs.readdirSync( pathResolve )

  let fileList = {}
   for( let [ i, item] of files.entries() ) {
    let itemArr = item.split(/\./)
    let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : 'undefined'
    let keyName = item + ''
    if( 'sql' === itemMime ) {
      fileList[ keyName ] =  `${pathResolve}/` + keyName
    }
  }
  return fileList
}

let sqlContentMap = {}
function getSqlContent( fileName,  path ) {
  let content = fs.readFileSync( path, 'binary' )
  sqlContentMap[ fileName ] = content
}
function getSqlContentMap () {
 
  let sqlMap = walkFile()
  for( let key in sqlMap ) {
    getSqlContent( key, sqlMap[key] )
  }
  return sqlContentMap
}
const eventLog = function( err , sqlFile, index ) {
  if( err ) {
    console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
  }
}


let sqlContentMaps = getSqlContentMap()

// 执行建表sql脚本
const createAllTables = async (ctx,next) => {
  for( let key in sqlContentMaps ) {
    let sqlShell = sqlContentMaps[key]
    let sqlShellList = sqlShell.split(';')

    for ( let [ i, shell ] of sqlShellList.entries() ) {
      if ( shell.trim() ) {
        let result = await query( shell )
        if ( result.serverStatus * 1 === 2 ) {
          eventLog( null,  key, i)
        } else {
          eventLog( true,  key, i) 
        }
      }
    }
  }
   await next()
}
module.exports= createAllTables


