import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rates: {
      USD: 1,
      CLP: 684,
      MXN: 20.12,
      EUR: 0.88,
    },
    leftRate: 'USD',
    rightRate: 'CLP',
  },
  mutations: {

  },
  actions: {

  },
});
