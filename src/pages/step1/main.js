import Vue from 'vue';
import Step1 from './Step1.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Step1),
}).$mount('#app');