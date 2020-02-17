import Qs from 'qs'
import MD5 from 'md5'
import store from 'store'

const { czbApi } = require('./urlConfig.json')
const axios = require('axios')
console.log(czbApi)
const ENVCONF = process.env.NODE_ENV === 'production' ? czbApi.master : czbApi.dev

const signGenerate = res => {
  var objs = paramSort(res)
  var strs = ''
  for (let i = 0; i < objs.length; i++) {
    strs += objs[i][0] + '' + ((objs[i][1] === null || objs[i][1] === undefined) ? '' : objs[i][1])
  }
  strs = MD5(ENVCONF.appSecret + strs + ENVCONF.appSecret).toLowerCase()
  return strs
}
const paramSort = res => {
  var str = []
  // 将对象转成数组
  for (var i in res) {
    str.push([i, res[i]])
  }
  // 对数组进行排序
  _sort(str, function (a, b) {
    return a[0] > b[0]
  })
  return str
}
const _sort = (array, fn) => {
  for (var i = 0; i < array.length - 1; i++) {
    var isSorted = true
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (fn(array[j], array[j + 1]) > 0) {
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        isSorted = false
      }
    }
    if (isSorted) {
      return false
    }
  }
}
const instance = axios.create({
  baseURL: ENVCONF.host,
  timeout: 180000,
  contentType: 'application/x-www-form-urlencoded',
  complet: function (xhr, status) {
    if (status === 'timeout') {
      xhr.abort() // 超时后中断请求
      // alert("网络超时，请刷新", function () {
      //       location.reload()
      //     })
    }
  }
})// 初始化配置
instance.interceptors.request.use(function (res) {
  if (res.method === 'post') {
    res.data.app_key = ENVCONF.appKey
    res.data.timestamp = new Date().getTime()
    res.data.token = store.get('token') || ''
    res.data.sign = signGenerate(res.data)
    res.data = Qs.stringify(res.data)
  } // CON.CONSOLE_REQUEST_ENABLE  console.info('requestInterceptor', `url:[${res.method}] ${res.url}`, res)
  return res
})
const ajax = P => {
  const params = Object.assign({}, P.params)
  const data = Object.assign({}, P.data)
  return instance({
    method: P.type || 'get',
    url: czbApi.path[P.url],
    params: P.params ? params : null,
    data: P.data ? data : null
  }).then(function (x) {
    var data = x.data //  成功后的统一操作
    P.success && P.success(data)
  }).catch(function (e) { // 失败后的统一操作
    P.error && P.error(e)
  })
}// czb 请求: ajax封装

export default ajax
