import VueRouter from 'vue-router';

import login from '../views/login';
import home from '../views/home';

const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/home', component: home },
];

const router = new VueRouter({
  routes,
});

export default router;
