import axios from 'axios';
import cookie from './cookie';

const csrftoken = cookie.getCookie('csrftoken');

axios.get('/csrf'); // 获取 csrftoken

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
