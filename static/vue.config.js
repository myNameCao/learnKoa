const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
function getIPAdress () {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
} // 获得电脑ip;
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@view', resolve('src/views'))
      .set('@utils', resolve('src/utils'))
      .set('@lib', resolve('lib')) // 新增的路径别名
  },
  css: {
    loaderOptions: {
      css: { // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [require('postcss-px2rem')({
          remUnit: 75
        })]
      }
    }
  },
  devServer: {
    host: getIPAdress() || '0.0.0.0',
    disableHostCheck: true,
    https: false, // https:{type:Boolean}
    hot: true,
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }, // 配置多个代理
    port: 8080 // 端口号
  }
}
