// 空白页
<template>
  <div></div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    created() {
      const path = this.$route.query;
      this.$router.push(path);
    }
  };
</script>
<style>
</style>