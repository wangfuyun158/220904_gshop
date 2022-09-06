/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*npm install vue-router@3.1.3*/
/*cnpm install vue-router*/
/*cnpm i vue-i18n@8.26.7 -S*/
/*npm install vue-router@3.5.3*/

import store from './store'
import {Button} from 'mint-ui'

//注册全局组件标签
Vue.component(Button.name,Button)//<mt-button>

new Vue({
  el:'#app',
  render: h => h(App),
  router,//使用上vue-router
  store,//使用vuex
})


