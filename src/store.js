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
    leftRate: 'CLP',
    rightRate: 'USD',
    currentMultiplier: 10,
  },
  mutations: {
    changeLeftRate(state, newRate) {
      state.leftRate = newRate;
    },
    changeRightRate(state, newRate) {
      state.rightRate = newRate;
    },
    swapRates(state) {
      console.log(state.leftRate, state.rightRate);
      const aux = state.leftRate;
      state.leftRate = state.rightRate;
      state.rightRate = aux;
    },
  },
  actions: {

  },
});
