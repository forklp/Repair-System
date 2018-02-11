<template>
  <div class="wrap">
    <mu-paper class="paper" :zDepth="1">
      <p class="title">飞扬·2018</p>
      <mu-text-field
        ref="username"
        class="input"
        :errorText="username_msg"
        errorColor="#ff9800"
        label="用户名"
        labelFloat ></mu-text-field>
      <mu-text-field
        ref="password"
        class="input"
        :errorText="passwd_msg"
        errorColor="#ff9800"
        type="password"
        label="密码"
        labelFloat ></mu-text-field>
      <mu-raised-button
        @click="check"
        class="btn"
        label="登录" ></mu-raised-button>
      <mu-raised-button
        @click="set" ></mu-raised-button>
    </mu-paper>
  </div>
</template>

<script>
import cookie from '../api/cookie';

export default {
  name: 'login',
  data() {
    return {
      username_msg: '',
      passwd_msg: '',
    };
  },
  methods: {
    check() {
      const username = this.$refs.username.$refs.input.value;
      const passwd = this.$refs.password.$refs.input.value;
      if (username !== '娜神') {
        this.username_msg = '用户名不存在';
      } else {
        this.username_msg = '';
      }
      if (passwd === '') {
        this.passwd_msg = '请输入密码';
      } else if (passwd !== '666') {
        this.passwd_msg = '密码错误';
      } else {
        this.passwd_msg = '';
      }
    },
    set() {
      cookie.setCookie('csrftoken', 'comeon');
      this.username_msg = cookie.getCookie('csrftoken');
      // this.username_msg = document.cookie;
    },
  },
  created() {
    document.title = '登录';
  },
};
</script>

<style scoped>
.paper {
  width: 300px;
  padding: 10px;
  margin: 40px auto 10px;
}
.title {
  letter-spacing: 3px;
  font-size: 24px;
  padding-left: 20px;
  padding-right: 20px;
}
.input {
  display: block;
  width: 100%;
}
.btn {
  margin: 20px auto 10px;
  display: block;
}
</style>
