import Vue from 'vue'
// 配置陆游相关的信息
//1. 导入VueRouter
import Router from 'vue-router'

const Home =() => import('../components/Home')
const HomeNews =() => import('../components/HomeNews')
const HomeMessage =() => import('../components/HomeMessage')
const About =() => import('../components/About')
const User =() => import('../components/User')
const Profile =() => import('../components/Profile')

//2. 通过Vue.use(插件)，安装插件
Vue.use(Router)

//3. 创建VueRouter对象
const routes = [
  // 4. 配置路由和组件之间的应用关系
    {
      path:'',
      //redirect 重定向
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component:Home,
      meta:{
        title:'首页'
      },
      children:[
        // {
        //   path:'',
        //   //redirect 重定向
        //   redirect:'news'
        // },
        {
          path:'news',
          component:HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta:{
        title:'关于'
      }
    },{
    //ES6的写法
      path:'/login/:userId',
      component: User,
      meta:{
        title:'用户'
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'档案'
      }
    }
  ]
const router = new Router({
  routes,
  mode:'history',
  linkActiveClass:'active',
})
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})
  //5. 将router对象挂载在Vue实例上
export default router
