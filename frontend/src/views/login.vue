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
export default {
  name: 'login',
  data() {
    return {
      username_msg: '',
      passwd_msg: '',
    };
  },
  methods: {
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
