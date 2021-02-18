import Vue from 'vue';
import Vuex from 'vuex';
import { setUser, getUser, removeUser } from '../utils/Cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 为false时表示不贴近
    user: getUser(),
    menuList: [],
    ProductList: [],
    cateList: [],
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
    getAllProductList(state, lists) {
      state.ProductList = lists;
    },
    getCategory(state, cates) {
      state.cateList = cates;
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
    getAllProductList(context, lists) {
      context.commit('getAllProductList', lists);
    },
    getCategory(context, cates) {
      context.commit('getCategory', cates);
    },
  },
  modules: {
  },
});
