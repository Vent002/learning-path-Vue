import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1. 基本使用
// axios({
//   url:'https://httpbin.org/cookies',
//   method:'get'
// }).then(res => {
//   console.log(res)
// })
//
// axios({
//   url:'https://httpbin.org/image/jpeg',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })


// 2. 发送并发请求
// axios.all([axios({
//   url:'https://httpbin.org/cookies',
// }),axios({
//   url:'https://httpbin.org/image/jpeg',
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

//3. 全局配置
// axios.defaults.baseURL = 'https://httpbin.org'
// axios.defaults.timeout = 5000
// axios.all([axios({
//   url:'/cookies',
// }),axios({
//   url:'/image/jpeg',
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 4. 创建对应的axios实例
// 解决不同请求地址
// const instace1 = axios.create({
//   baseURL : 'https://httpbin.org',
//   timeout : 5000
// })
//
// instace1({
//   url:'/cookies',
// }).then(res => {
//   console.log(res);
// })
//
// instace1({
//   url: '/image/jpeg'
// }).then(res => {
//   console.log(res);
// })

//5. 封装request模块
import {request} from './network/request'

// request({
//   url:'/cookies',
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig:{
//
//   },
//   success:function(res){
//
//   },
//   failure:function(err){
//
//   }
// })

request({
  url:'post',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
