import login from '../views/login';
import home from '../views/home';

const routes = [
  { path: '', component: login },
  { path: 'login', component: login },
  { path: 'home', component: home },
];

export default routes;
