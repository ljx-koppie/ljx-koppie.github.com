import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'
import axios from 'axios'

Vue.use(VueRouter);

require('./assets/css/base.css');

const router = new VueRouter({
	routes
})

Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
