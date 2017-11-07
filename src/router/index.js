import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
var main = r => require.ensure([], () => r(require('@/components/main/main')), 'main')
var paper = r => require.ensure([], () => r(require('@/components/paper/paper')), 'paper')

var homes = r => require.ensure([], () => r(require('@/components/home/homes')), 'homes')
var carousel = r => require.ensure([], () => r(require('@/components/carousel/carousel')), 'carousel')
var article = r => require.ensure([], () => r(require('@/components/article/article')), 'article')
var video = r => require.ensure([], () => r(require('@/components/video/video')), 'video')
var topic = r => require.ensure([], () => r(require('@/components/topic/topic')), 'topic')
var comment = r => require.ensure([], () => r(require('@/components/comment/comment')), 'comment')
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
        path: '/homes',
        component: homes,
        children:[
          {
            path: 'carousel',
            component: carousel,
          },
          {
            path: 'article',
            component: article,
          },
          {
            path: 'video',
            component: video,
          },
        ]
      },
      {
        path: '/topic',
        component: topic,
        children:[
        {
          path: 'carousel',
          component: carousel,
        },
        {
          path: 'article',
          component: article,
        },
        {
          path: 'video',
          component: video,
        }
        ]
      },
      {
        path: '/comment',
        component: comment,
      }
      ]
    }
];
const router =  new Router({
  routes: routes,
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production'
})
export default router;
