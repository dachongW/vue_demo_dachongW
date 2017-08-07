
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
//import VueResource from "vue-resource"

//引入公共样式表
import '../static/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
