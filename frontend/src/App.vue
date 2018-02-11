<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'como',
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
