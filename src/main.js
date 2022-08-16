import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue';
import { routes } from "./routes";
import store from './store/store.js';
import vueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(vueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-ee3b9-default-rtdb.firebaseio.com/';

Vue.filter('currency', (value)=>{
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
