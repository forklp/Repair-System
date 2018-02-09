<template>
  <div class="wrap">
    <mu-paper class="paper" :zDepth="1">
      <p class="title">飞扬·2018</p>
      <mu-text-field
        ref="usrname"
        class="input"
        :errorText="usrname_msg"
        errorColor="#ff9800"
        label="用户名"
        labelFloat />
      <mu-text-field
        ref="passwd"
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
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      usrname_msg: '',
      passwd_msg: '',
    };
  },
  methods: {
    check() {
      const usrname = this.$refs.usrname.$refs.input.value;
      const passwd = this.$refs.passwd.$refs.input.value;
      if (usrname !== '娜神') {
        this.usrname_msg = '用户名不存在';
      } else {
        this.usrname_msg = '';
      }
      if (passwd === '') {
        this.passwd_msg = '请输入密码';
      } else if (passwd !== '666') {
        this.passwd_msg = '密码错误';
      } else {
        this.passwd_msg = '';
      }
    },
  },
  created() {
    document.title = '登录';
  },
};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
}
.paper {
  position: relative;
  width: 300px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  top: -230px;
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
