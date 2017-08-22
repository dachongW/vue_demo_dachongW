import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import server404 from '@/components/404'
import home from '@/components/Home'

import page from '@/components/demo/01_page/page'

import pass_value from '@/components/example/01_pass_value/faster'
import tree from '@/components/example/test/tree'
import test from '@/components/example/test/test'

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
    // {
    //   path: '',
    //   redirect: '/home/page'
    // }
    {
      path: '/demo',
      component: home,
      children: [
        {
          path: '/',
          redirect: '/demo/page',
        },
        {
          path: '/page',
          name: 'page',
          component: page,
          meta: {
            title: "page",
            requiresAuth: true
          }
        }
      ],
    },
    {
      path: 'example',
      component: home,
      children: [
        {
          path: '/',
          redirect: '/example/pass_value'
        },
        {
          path: '/pass_value',
          name: 'pass_value',
          component: pass_value,
          meta: {
            title: "pass_value",
            requiresAuth: true
          }
        },
        {
          path: '/tree',
          name: 'tree',
          component: tree,
          meta: {
            title: "tree",
            requiresAuth: true
          }
        },
        {
          path: '/test',
          name: 'test',
          component: test,
          meta: {
            title: "test",
            requiresAuth: true
          }
        }
      ]
    }
  ]
})
export default router
