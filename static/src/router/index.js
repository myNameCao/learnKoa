
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter) // 挂载

export default new VueRouter(
  {
    mode: 'history',
    routes
  })
