const mysql      = require('mysql')
const pool = mysql.createPool({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : 'chris',   // 数据库密码
  database : 'chris'  // 选中数据库
})

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


module.exports= async function(ext,next){

  let sql = 'SELECT * FROM _mysql_session_store'
  let dataList = await query( sql )
  console.log(dataList)
  await next()
   
}


