<template>
  <mu-card style="margin: 15px;">
    <mu-card-title :title="data.title" :subTitle="id" />
    <mu-card-text>{{data.desc}}</mu-card-text>
    <mu-card-actions>
      <mu-flat-button label="详情" />
      <mu-flat-button label="接单" />
    </mu-card-actions>
  </mu-card>
</template>

<script>
export default {
  name: 'todoCard',
  data() {
    return {
    };
  },
  props: ['data'],
  computed: {
    id() {
      return `单号：${this.data.id}`;
    },
  },
};
</script>

<style scoped>

</style>

