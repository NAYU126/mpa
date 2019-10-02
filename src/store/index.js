import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import actions from './actions'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex);

const initialState = {
  name: '',
  mail: ''
}

export default new Vuex.Store({
  state: {
    initialState
  },
  getters,
  actions,
  mutations,
  plugins: [createPersistedState({storage: window.sessionStorage})]
});