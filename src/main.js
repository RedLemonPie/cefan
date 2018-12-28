import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
<<<<<<< HEAD
//import Axios from 'axios'
=======
import Axios from 'axios'
>>>>>>> 008ce1cd740f0e2f9469e0047bb051e272c80713

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
