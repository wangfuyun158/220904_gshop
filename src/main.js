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

new Vue({
  el:'#app',
  render: h => h(App),
  router,
})


