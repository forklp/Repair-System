<template>
  <mu-paper class="paper" :zDepth="1">
    <form @keyup.enter="submit">
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
      @click="submit"
      class="btn"
      label="登录" />
    </form>
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
    // 检查填写情况
    check() {
      const username = this.$refs.username.$refs.input.value;
      const password = this.$refs.password.$refs.input.value;
      let flag = 0;
      if (username === '') {
        this.username_msg = '请输入用户名';
      } else {
        this.username_msg = '';
        flag += 1;
      }
      if (password === '') {
        this.passwd_msg = '请输入密码';
      } else {
        this.passwd_msg = '';
        flag += 1;
      }
      if (flag === 2) {
        return true;
      }
      return false;
    },
    // 提交
    submit() {
      if (this.check() === false) {
        return 0;
      }
      const username = this.$refs.username.$refs.input.value;
      const password = this.$refs.password.$refs.input.value;
      this.axios.post('/user/login',
        {
          username,
          password,
        },
      ).then((response) => {
        const code = response.data;
        switch (code) {
          case (0): this.username_msg = '请检查用户名和密码';
            this.passwd_msg = '';
            break;
          case (200): this.username_msg = '';
            this.passwd_msg = '';
            this.$store.commit('login');
            this.$router.push('/home');
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
  margin: 90px auto 10px;
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
