<template>
  <div class="container">
    <mu-appbar :title="appBar">
      <mu-icon-button icon="menu" slot="left" @click="toggle" />
      <mu-icon-button icon="cached" slot="right" @click="refresh"/>
    </mu-appbar>
    <div style="padding: 0;">
      <todo-card v-for="cardData in cardDatas" :cardData="cardData" :key="cardData.id"/>
    </div>
    <mu-drawer :open="open" :docked="false" @close="toggle">
      <mu-list>
        <mu-list-item title="维修技术人员" disabled>
          <mu-avatar slot="left" color="deepOrange300" backgroundColor="purple500">维</mu-avatar>
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="未接单" @click="changeUrl('ownerless')">
          <mu-icon slot="left" value="hourglass_full"/>
        </mu-list-item>
        <mu-list-item title="进行中" @click="changeUrl('process')">
          <mu-icon slot="left" value="build"/>
        </mu-list-item>
        <mu-list-item title="已完成" @click="changeUrl('done')">
          <mu-icon slot="left" value="done_all"/>
        </mu-list-item>
        <mu-divider />
        <mu-list-item @click="logout" title="注销">
          <mu-icon slot="left" value="power_settings_new"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>

import todoCard from './todoCard';

export default {
  name: 'order',
  data() {
    return {
      open: false,
      cardDatas: [],
      urlList: {
        ownerless: '/order/rest',
        process: '/order/process',
        done: '/order/done',
      },
      requestUrl: '',
      appBar: '',
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
    refresh() {
      this.cardDatas = [];
      this.axios.get(this.requestUrl)
        .then((response) => {
          this.cardDatas = response.data;
        });
    },
    changeUrl(desc) {
      switch (desc) {
        case 'ownerless': this.requestUrl = this.urlList.ownerless;
          this.appBar = '待接单';
          break;
        case 'process': this.requestUrl = this.urlList.process;
          this.appBar = '进行中';
          break;
        case 'done': this.requestUrl = this.urlList.done;
          this.appBar = '已完成';
          break;
        default:
      }
      this.refresh();
      this.open = false;
    },
  },
  mounted() {
    this.changeUrl('ownerless');
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 20px;
}
</style>
