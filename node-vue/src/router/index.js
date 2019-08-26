import Vue from 'vue'
import Router from 'vue-router'
import getLocal from '@/components/local/getLocal.vue'
import getExactLocal from '@/components/local/getExactLocal.vue'
import index from '@/components/mainPage/index.vue'
import search from '@/components/mainPage/search.vue'
import order from '@/components/mainPage/order.vue'
import person from '@/components/mainPage/person.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'getLocal',
      component: getLocal
    },
    { path: '/getExact/:id',name: 'getExact',component: getExactLocal},
    { path: '/index', name:'index', component: index},
    { path: '/search', name:'search', component: search},
    { path: '/order', name:'order', component: order},
    { path: '/person', name:'person', component: person}
  ]
})
