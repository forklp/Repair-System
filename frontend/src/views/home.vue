<template>
  <div>
    <p>{{count}}</p>
    <p>{{nums}}</p>
    <mu-raised-button @click="change" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      num: 30,
    };
  },
  computed: {
    nums() {
      const after = this.num + 30;
      return after;
    },
    ...mapState([
      'count',
    ]),
  },
  methods: {
    change() {
      this.$store.commit('increase');
    },
  },
};
</script>

<style scoped>

</style>
