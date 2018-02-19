import VueRouter from 'vue-router';

import cookie from '../utils/cookie';

import login from '../views/login';
import home from '../views/home';
import store from '../store/store';

const routes = [
  { path: '/', component: home, meta: { requireAuth: true } },
  { path: '/login', component: login },
  { path: '/home', component: home, meta: { requireAuth: true } },
];

const router = new VueRouter({
  routes,
});

// 页面刷新时，重新赋值token
if (cookie.getCookie('token')) {
  store.commit('login');
}

// 登录拦截。如果目标路由是需要登录的页面且用户未登录时重定向至登录页面。
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router;
