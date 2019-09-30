import Vue from 'vue'
import Confirm from './Confirm.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(Confirm),
}).$mount('#app');