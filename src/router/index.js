import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import server404 from '@/components/404'
import home from '@/components/Home'

import page from '@/components/demo/01_page/page'

Vue.use(Router)

 const router = new Router({
  routes: [
    { path: '*',
      component: server404,
      meta: {
        title: "404",
        requiresAuth: false
      }
    },
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [],
      meta: {
        title: '汪大虫的个人空间',
        requiresAuth: false
      }
    },
    {
      path: '/page',
      name: 'page',
      component: page,
      meta: {
        title: '分页',
        requiresAuth: true
      }
    },
    // {
    //   path: '/demo',
    //   component: home,
    //   children: [
    //     {
    //       path: '/',
    //       redirect: '/demo/page',
    //     },
    //     {
    //       path: '/page',
    //       name: 'page',
    //       component: page,
    //       meta: {
    //         title: "page",
    //         requiresAuth: true
    //       }
    //     }
    //   ],
    //   meta: {
    //     title: 'demo',
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '',
    //   redirect: '/home/page'
    // }
  ]
})
export default router
