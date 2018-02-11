<template>
  <mu-paper class="paper" :zDepth="1">
    <p class="title">飞扬·2018</p>
    <mu-text-field
      ref="username"
      class="input"
      :errorText="username_msg"
      errorColor="#ff9800"
      label="用户名"
      labelFloat />
    <mu-text-field
      ref="password"
      class="input"
      :errorText="passwd_msg"
      errorColor="#ff9800"
      type="password"
      label="密码"
      labelFloat />
    <mu-raised-button
      @click="check"
      class="btn"
      label="登录" />
  </mu-paper>
</template>

<script>
import csrf from '../utils/csrf';

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
      const password = this.$refs.password.$refs.input.value;
      let flag = 1;
      if (username === '') {
        this.username_msg = '请输入用户名';
        flag = 0;
      } else {
        this.username_msg = '';
      }
      if (password === '') {
        this.passwd_msg = '请输入密码';
        flag = 0;
      } else {
        this.passwd_msg = '';
      }
      if (flag === 0) {
        return 0;
      }
      csrf.request.post('/user/login',
        {
          username,
          password,
        },
      ).then((response) => {
        const code = response.data;
        switch (code) {
          case (0): this.username_msg = '用户名不存在';
            this.passwd_msg = '';
            break;
          case (1): this.username_msg = '';
            this.passwd_msg = '密码错误';
            break;
          case (200): this.username_msg = '';
            this.passwd_msg = '';
            this.$router.push('home');
            break;
          default: break;
        }
      });
      return 0;
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
