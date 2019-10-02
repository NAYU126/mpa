import Vue from 'vue'
import Step1 from './Step1.vue'
import store from '../../store'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Step1),
}).$mount('#app');