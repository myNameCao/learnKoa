import Vue from 'vue'
import App from './App.vue'
import './static/resetcss.css'//  初始化样式
import 'lib-flexible/flexible.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
