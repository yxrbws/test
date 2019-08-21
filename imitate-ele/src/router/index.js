import Vue from 'vue'
import Router from 'vue-router'
import getLocal from '@/components/local/getLocal.vue'
import getExactLocal from '@/components/local/getExactLocal.vue'
import index from '@/components/mainPage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'getLocal',
      component: getLocal
    },
    { path: '/getExact/:id',name: 'getExact',component: getExactLocal},
    { path: '/index', name:'index', component: index}
  ]
})
