// 布局方式
const layout = () => import('@view/layout')
const laydirection = () => import('@view/layout/laydirection')

// 页面
const collect = () => import('@view/collect')
const index = () => import('@view/index')
const pullNew = () => import('@view/pullNew')
const showQrcode = () => import('@view/pullNew/showQrcode')
const getCode = () => import('@view/pullNew/getCode')

const router = [
  {
    path: '/',
    component: layout,
    children: [
      { name: 'collect', path: '/collect', component: collect, meta: { title: '', requireAuth: false } },
      { name: '/', path: '/', component: index, meta: { title: '', requireAuth: false } }
    ]
  },
  {
    path: '/pullNew',
    component: laydirection,
    children: [
      { name: 'pullNew', path: '/', component: pullNew, meta: { title: '', requireAuth: false } },
      { name: 'showQrcode', path: '/showQrcode', component: showQrcode, meta: { title: '', requireAuth: false } },
      { name: 'getCode', path: '/getCode', component: getCode, meta: { title: '', requireAuth: false } }
    ]
  }
]
export default router
