import Vue from 'vue'
import VueX from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import MoudleA from "./moudles/MoudleA";

//1. 安装插件
Vue.use(VueX)

const state = {
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
}
//2. 创建对象
const store =new VueX.Store({
  // 保存状态
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:MoudleA
  }
})

//3. 导出store 独享
export default store
