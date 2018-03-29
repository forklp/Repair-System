import axios from 'axios';
import cookie from './cookie';

let csrftoken = '';

axios.get('/csrf').then(() => {
  csrftoken = cookie.getCookie('csrftoken');
}); // 获取 csrftoken

axios.interceptors.request.use(
  (config) => {
    if (csrftoken) {
      config.headers['X-CSRFToken'] = csrftoken;
    }
    return config;
  },
  err => Promise.reject(err),
);

export default axios;
