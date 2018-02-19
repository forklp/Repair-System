import Vue from 'vue';
import Vuex from 'vuex';
import cookie from '../utils/cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    login(state) {
      state.token = cookie.getCookie('token');
    },
    logout(state) {
      state.token = null;
    },
  },
});

export default store;
