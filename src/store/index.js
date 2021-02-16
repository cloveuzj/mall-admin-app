import Vue from 'vue';
import Vuex from 'vuex';
import { setUser, getUser, removeUser } from '../utils/Cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 为false时表示不贴近
    user: getUser(),
    menuList: [],
  },
  mutations: {
    collapsedChange(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, user) {
      state.user = user;
      setUser(user);
    },
    removeUserInfo(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
      removeUser();
    },
    setMenu(state, routes) {
      state.menuList = routes;
    },
  },
  actions: {
    collapsedChanged(context) {
      context.commit('collapsedChange');
    },
    setUserInfo(context, user) {
      context.commit('setUserInfo', user);
    },
    removeUserInfo(context) {
      context.commit('removeUserInfo');
    },
    setMenu(context, routes) {
      context.commit('setMenu', routes);
    },
  },
  modules: {
  },
});
