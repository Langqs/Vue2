<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main
          <el-button type="primary" @click="getInfo">点我请求</el-button>
          <el-button type="primary" @click="gohome">点我跳转</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    async getInfo(){
      const res =await this.$API.reqCategoryList()
      console.log(res);
    },
    gohome(){
      this.$router.push({
        path:'/home',
        query:{
          name:Math.random()
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
</style>
