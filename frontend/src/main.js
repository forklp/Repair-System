import Vue from 'vue';

// UI
import museUI from 'muse-ui'; // 导入 Muse UI (模板)
import 'muse-ui/dist/muse-ui.css'; // 导入 Muse UI (样式)
import 'muse-ui/dist/theme-carbon.css'; // 导入 Muse UI (主题)
import 'material-design-icons/iconfont/material-icons.css'; // 导入 Material-desigin-fonts (图标)

// Modules
import App from './App';
import router from './router/router';
import store from './store/store';
import axios from './utils/http';

// Vue.use
Vue.use(museUI);

// 添加原型方法
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
