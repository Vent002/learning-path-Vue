<template>
<div id="app">
  <h2>{{message}}</h2>
  <h2>{{$store.state.counter}}</h2>
  <button @click="addition">+</button>
  <button @click="subtraction">-</button>
  <button @click="addCount(5)">+5</button>
  <button @click="addCount(10)">+10</button>
  <button @click="addStudent">添加学生</button>

  <h2>Actions的使用</h2>
  <h2>{{$store.state.info}}</h2>
  <button @click="updateInfo">修改</button>

  <h2>modules的使用</h2>
  <h2>{{$store.state.a.name}}</h2>
  <button @click="updateName">修改姓名</button>
  <h2>{{$store.getters.fullName}}</h2>
  <h2>{{$store.getters.fullName2}}</h2>
  <h2>{{$store.getters.fullName3}}</h2>
  <button @click="asyncUpdateName">异步修改姓名</button>

  <h2>getters的使用</h2>
  <h2>{{$store.getters.powerCounter}}</h2>
  <h2>{{$store.getters.more20stu}}</h2>
  <hello-vue-x/>
</div>
</template>

<script>
import HelloVueX from "./components/HelloVueX";

export default {
  name: 'App',
  components:{
    HelloVueX
  },
  data(){
    return{
      message:'我是组件',
    }
  },
  // computed:{
  //   more20stu(){
  //     return this.$store.state.students.filter(s => s.age >= 20)  //箭头函数 只有一行代码简写
  //     }
  // },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //1. 普通的提交封装
      //this.$store.commit('incrementCount',count)
      //2. 特殊的提交封装
      this.$store.commit({
        type:'incrementCount',
        count,
      })
    },
    addStudent(){
      const stu = {id:109,name:'hhh',age:17}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是payload',
      //   success:() => {
      //     console.log('完成');
      //   }
      // })
      this.$store
        .dispatch('aUpdateInfo','我是携带信息')
        .then(res => {
          console.log('里面已经完成')
          console.log(res)
        })
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName','王五')
    }
  }
}
</script>

<style>

</style>
