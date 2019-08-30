// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vuex from 'vuex'
Vue.use(Vuex)

import 'swiper/dist/css/swiper.min.css'

import 'bootstrap/dist/css/bootstrap.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    localCity: null,
    searchHostory: [],
    exactAddress: null
  },
  mutations:{
    getCity(state,data){
      state.localCity = data
      console.log(state.localCity)
    },
    getSearchHostory(state,data){
      state.exactAddress = data[0]
      if(state.searchHostory.length == 0){
        state.searchHostory.push(data[1])
      }else{
        let hostory = new Map()
        state.searchHostory.forEach(item => {
          hostory.set(item,true)
        })
        if(!hostory.has(data[1])){ // 如果不存在相同的搜索历史地址，则添加进state.searchHostory
          state.searchHostory.push(data[1])
        }
      }
      
      
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
