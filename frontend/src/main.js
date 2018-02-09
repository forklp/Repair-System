// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 绝对路径引入
import Vue from 'vue';
import VueRouter from 'vue-router'; // 引入 Vue-Router
import museUI from 'muse-ui'; // 导入 Muse UI (模板)
import 'muse-ui/dist/muse-ui.css'; // 导入 Muse UI (样式)
import 'muse-ui/dist/theme-carbon.css'; // 导入 Muse UI (主题)

// 相对路径引入
import App from './App';
import routes from './routes/index';

Vue.use(museUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
