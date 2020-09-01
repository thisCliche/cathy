import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem'
// import './assets/font/iconfont.css'
import './assets/less/reset.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.90.14:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

import './plugins/vant'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
