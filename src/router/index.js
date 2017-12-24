import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
var main = r => require.ensure([], () => r(require('@/components/main/main')), 'main')
var paper = r => require.ensure([], () => r(require('@/components/paper/paper')), 'paper')
var billList = r => require.ensure([], () => r(require('@/components/paper/billList')), 'billList')
var typeList = r => require.ensure([], () => r(require('@/components/paper/typeList')), 'typeList')
var detailList = r => require.ensure([], () => r(require('@/components/paper/detailList')), 'detailList')

Vue.use(Router)

const routes = [
    {
      path: '/',
      component: App,
      children: [
      {
        path: '',
        redirect: '/main'
      },
      {
        path: '/main',
        component: main,
        children:[
          {
            path: 'paper',
            component: paper
          },
          {
            path: 'item',
            component: paper
          },
          {
            path: 'setting',
            component: paper
          }
        ]
      },
      {
        path: '/billList',
        component: billList,
      },
      {
        path: '/typeList',
        component: typeList,
        children:[
          {
            path: 'detailList',
            component: detailList
          }
        ]
      },
      ]
    }
];
const router =  new Router({
  routes: routes,
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production'
})
export default router;
