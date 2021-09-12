/** 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( /* webpackChunkName: 'home' */ '@/view/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: 'login' */ '@/view/login.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import( /* webpackChunkName: 'category' */ '@/view/Category.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import( /* webpackChunkName: 'cart' */ '@/view/Cart.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/user',
      name: 'user',
      component: import( /* webpackChunkName: 'user' */ '@/view/User.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import( /*webpackChunkName: 'production' */ '@/view/ProductDetail.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: () => import(/* webpackChunkName: "product-list" */ '@/view/ProductList.vue'),
      meta: {
        index: 2
      }
    },
  ]
})


export default router