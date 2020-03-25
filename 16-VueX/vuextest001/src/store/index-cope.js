import Vue from 'vue'
import VueX from 'vuex'

//1. 安装插件
Vue.use(VueX)

//2. 创建对象

const MoudleA = {
  state:{
    name:'赵四'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullName(state){
      return '拉布拉斯.'+state.name
    },
    fullName2(state,getters){
      return '尼古拉斯.'+getters.fullName
    },
    fullName3(state,getters,rootState){
      return getters.fullName2 +'.'+ rootState.counter
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','王五')
      },1000)
    }
  }
}

const store =new VueX.Store({
  // 保存状态
  state:{
    counter:1000,
    students:[
      {id:110,name:'lyc',age:10},
      {id:111,name:'gxm',age:22},
      {id:112,name:'hsm',age:18},
      {id:114,name:'lgd',age:10},
    ],
    info:{
      name:'nancy',
      age:19,
      sex:'男'
    }
  },
  mutations:{
    // 定义方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,payload){
      state.counter += payload.count
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name = 'hsh'
    }
  },
  actions:{
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }
    aUpdateInfo(context,payload){
     return new Promise((resolve,reject) => {
       setTimeout(() => {
         context.commit('updateInfo')
         console.log(payload);
         resolve('123123123')
       },1000)
     })
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age >= 15)
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      // return function (age) {
      //   return state.students.filter(s => s.age >= age)
      // }
      return age => {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  modules:{
    a:MoudleA
  }
})

//3. 导出store 独享
export default store
