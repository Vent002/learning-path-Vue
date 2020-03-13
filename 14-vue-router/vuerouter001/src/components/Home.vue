<template>
  <div>
    <h2>我是首页标题</h2>
    <p>我是内容 啊哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        path:'/home/news',
      }
    },
    activated() {
      //console.log(this.path);
      this.$router.push(this.path);
    },
    beforeRouteLeave(to, from, next){
      console.log(this.$route.path);
      this.path = this.$route.path
      next();
    }
  }
</script>

<style scoped>

</style>
