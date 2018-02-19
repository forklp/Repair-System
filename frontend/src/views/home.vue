<template>
  <div class="container">
    <p>{{msg}}</p>
    <mu-raised-button @click="logout" label="注销" />
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '',
    };
  },
  computed: {
  },
  methods: {
    logout() {
      this.$axios.get('/user/logout')
        .then((response) => {
          this.msg = response.data;
          this.$router.push('/login');
          this.$store.commit('logout');
        });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
