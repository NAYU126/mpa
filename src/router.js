import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from 'pages/top/Top.vue'
import Step1 from 'pages/step1/Step1.vue'
import Step2 from 'pages/step2/Step2.vue'
import Confirm from 'pages/confirm/Confirm.vue'
import Complete from 'pages/complete/Complete.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    }
  ]
})

export default router