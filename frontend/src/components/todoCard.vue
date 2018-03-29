<template>
  <mu-card style="margin: 15px;">
    <mu-card-title :title="cardData.title" :subTitle="id" />
    <mu-card-text>{{cardData.desc}}</mu-card-text>
    <mu-card-actions>
      <mu-flat-button label="详情" />
      <mu-flat-button label="接单" />
    </mu-card-actions>
  </mu-card>
</template>

<script>
export default {
  name: 'todoCard',
  props: ['cardData'],
  computed: {
    id() {
      return `单号：${this.cardData.id}`;
    },
  },
};
</script>

<style scoped>

</style>

