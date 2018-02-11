import axios from 'axios';
import cookie from './cookie';

const csrftoken = cookie.getCookie('csrftoken');

const request = axios.create({
  headers: {
    'X-CSRFToken': csrftoken,
  },
});

export default {
  csrftoken,
  request,
};
