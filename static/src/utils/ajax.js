
const axios = require('axios').default
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001',
  timeout: 15000,
  contentType: 'application/x-www-form-urlencoded',
  complete: function (xhr, status) {
    if (status === 'timeout') {
      xhr.abort()
    }
  }
}) // 站点统一的配置
const ajax = (P) => {
  return instance(
    {
      method: P.type || 'get',
      url: P.url,
      params: P.params ? P.params : null,
      data: P.data ? P.data : null
    }
  ).then((res) => {
    P.success && P.success(res.data)
  }).catch(function (err) {
    P.error && P.error(err)
  })
}//  chope web请求: ajax封装

module.exports = ajax
