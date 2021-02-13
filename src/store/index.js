import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 为false时表示不贴近
  },
  mutations: {
    collapsedChange(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    collapsedChanged(context) {
      context.commit('collapsedChange');
    },
  },
  modules: {
  },
});
