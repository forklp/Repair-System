import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    token: null,
  },
  mutations: {
    increase(state) {
      state.count += 1;
    },
    login(state) {
      state.token = 1;
      localStorage.token = 1;
    },
  },
});

export default store;
