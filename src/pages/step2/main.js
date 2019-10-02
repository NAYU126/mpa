import Vue from 'vue';
import Step2 from './Step2.vue';
import store from '../../store'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Step2),
}).$mount('#app');