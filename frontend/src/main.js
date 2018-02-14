// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 绝对路径引入
import Vue from 'vue';
import VueRouter from 'vue-router'; // 引入 Vue-Router
import museUI from 'muse-ui'; // 导入 Muse UI (模板)
import 'muse-ui/dist/muse-ui.css'; // 导入 Muse UI (样式)
import 'muse-ui/dist/theme-carbon.css'; // 导入 Muse UI (主题)
import axios from 'axios'; // 导入 axios

// 相对路径引入
import App from './App';
import router from './router/router';

// Vue.use
Vue.use(museUI);
Vue.use(VueRouter);

// 添加原型方法
Vue.prototype.$axios = axios;

// 获取 csrftoken cookies
axios.get('csrf/');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
