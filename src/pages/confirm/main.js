import Vue from 'vue'
import Confirm from './Confirm.vue'
import store from '../../store'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Confirm),
}).$mount('#app');