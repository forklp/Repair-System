import Vue from 'vue';
import VueRouter from 'vue-router';

// Utils
import cookie from '../utils/cookie';
import store from '../store/store';

// routes files
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

// 页面刷新时，重新赋值token
if (cookie.getCookie('token')) {
  store.commit('login');
}

// 登录拦截。如果目标路由是需要登录的页面且用户未登录时重定向至登录页面。
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.no_requireAuth)) {
    next();
  } else if (store.state.token) {
    next();
  } else {
    next({
      path: '/login',
    });
  }
});

export default router;
