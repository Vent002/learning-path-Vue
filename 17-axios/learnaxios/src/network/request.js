import axios from 'axios'

export function request(config){
  return new Promise((resolve, reject) => {
    //1. 创建axios的实例
    const instance = axios.create({
      baseURL:'https://httpbin.org',
      timeout:5000
    })

    //axios拦截器
    instance.interceptors.request.use(config => {
      console.log(config);
      // 请求拦截的作用
      //1. config中一些信息不符合服务器的要求
      //2. 每次发送网络请求时，显示一个请求图标
      //3. 某些登录请求()，必须携带一些信息
      return config
    },error => {
      console.log(error);
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      //console.log(res);
      return res.data
    },error => {
      console.log(error);
    })

    // 发送网络请求
   return instance(config)  // 返回的是Promise

  })
}

// Promise函数
// export function request(config){
//   return new Promise((resolve, reject) => {
//     //1. 创建axios的实例
//     const instance = axios.create({
//       baseURL:'https://httpbin.org',
//       timeout:5000
//     })
//
//     // 发送网络请求
//     instance(config)
//       .then(res => {
//       resolve(res)
//     })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
// 回调函数
// export function request(config,success,failure){
//   //1. 创建axios的实例
//   const instance = axios.create({
//     baseURL:'https://httpbin.org',
//     timeout:5000
//   })
//
//   // 发送网络请求
//   instance(config).then(res => {
//     console.log(res);
//     success(res);
//   })
//     .catch(err => {
//       console.log(err);
//       failure(err)
//     })
// }
