import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
import store from '../store/index';
import getMenu from '../utils/permission';

Vue.use(VueRouter);
const asyncRoutes = [
  {
    path: '/product',
    name: 'Product',
    component: Home,
    meta: {
      title: '商品',
    },
    children: [
      {
        path: 'productlist',
        name: 'productList',
        meta: {
          title: '商品列表',
        },
        component: () => import('../views/page/productList.vue'),
      },
      {
        path: 'productadd',
        name: 'productAdd',
        component: () => import('../views/page/productAdd.vue'),
        meta: {
          title: '商品添加',
        },
      },
      {
        path: 'catagoy',
        name: 'Catagoy',
        meta: {
          title: '类目管理',
        },
        component: () => import('../views/page/catagoy.vue'),
      },
    ],
  },
];
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/page/index.vue'),
        meta: {
          title: '统计',
        },
      },
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {
      hidden: true,
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/Register',
    name: 'Register',
    meta: {
      hidden: true,
    },
    component: () => import('../views/Register.vue'),
  },
];
// 菜单栏权限配置
const filterRoutes = getMenu(store.state.user.role, asyncRoutes);
for (let i = 0; i < filterRoutes.length; i += 1) {
  routes.push(filterRoutes[i]);
}
const loginFilter = routes.filter((item) => item.meta.hidden !== true);
store.dispatch('setMenu', loginFilter);

const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path !== '/Login' && to.path !== '/Register') {
    if (store.state.user.appkey) {
      next();
    } else {
      next('/Login');
    }
  }
  next();
});
export default router;
