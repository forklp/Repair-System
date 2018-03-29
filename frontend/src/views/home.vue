<template>
  <div class="container">
    <mu-appbar title="待接单">
      <mu-icon-button
        icon="menu"
        slot="left"
        @click="toggle" />
    </mu-appbar>
    <div style="padding: 0;">
      <todo-card v-for="cardData in cardDatas" :cardData="cardData" :key="cardData.id"/>
    </div>
    <!-- <mu-raised-button @click="logout" label="注销" /> -->
    <mu-drawer
      :open="open"
      :docked="false"
      @close="toggle" />
  </div>
</template>

<script>

import todoCard from '../components/todoCard';

export default {
  name: 'home',
  data() {
    return {
      open: false,
      cardDatas: [],
    };
  },
  components: {
    todoCard,
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
  mounted() {
    this.axios.get('/order/rest')
      .then((response) => {
        this.cardDatas = response.data;
      });
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 20px;
}
</style>
