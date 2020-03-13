<template>
  <div>
    <h2>我是profile文件</h2>
    <label for="">姓名：{{$route.query.name}}</label>
    <label for="">年龄：{{$route.query.age}}</label>
    <label for="">性别：{{$route.query.sex}}</label>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    // data(){
    //   return{
    //     name:'',
    //     age: 0,
    //     sex:''
    //   }
    // },
    // methods:{
    //   getInfo(){
    //     let name = this.$route.query;
    //   }
    // }
  }
</script>

<style scoped>

</style>
