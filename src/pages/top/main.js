import Vue from 'vue'
import Top from './Top.vue'
import store from '../../store'


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Top),
}).$mount('#app');