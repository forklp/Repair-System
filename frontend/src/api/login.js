import axios from 'axios';
import cookie from './cookie';

const csrftoken = cookie.getCookie('csrftoken');
const csrfReq = axios.create({
  'X-CSRFToken': csrftoken,
});

export default {
  csrfReq,
};
