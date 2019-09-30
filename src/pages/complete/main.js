import Vue from 'vue'
import Complete from './Complete.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(Complete),
}).$mount('#app');