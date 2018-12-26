import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import Axios from 'axios'

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
