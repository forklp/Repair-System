import login from '../views/login';
import home from '../views/order';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login, meta: { no_requireAuth: true } },
  { path: '/home', component: home },
];

export default routes;
