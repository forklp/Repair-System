<template>
  <div class="container">
    <mu-appbar title="Title">
      <mu-icon-button
        icon="menu"
        slot="left"
        @click="toggle" />
    </mu-appbar>
    <mu-raised-button @click="logout" label="注销" />
    <mu-drawer
      :open="open"
      :docked="false"
      @close="toggle" />
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      open: false,
    };
  },
  computed: {
  },
  methods: {
    logout() {
      this.axios.get('/user/logout')
        .then(() => {
          this.$router.push('/login');
          this.$store.commit('logout');
        });
    },
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 20px;
}
</style>
