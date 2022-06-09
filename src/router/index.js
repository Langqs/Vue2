import Vue from 'vue'
import VueRouter from "vue-router";
import store from '@/store'
Vue.use(VueRouter)

// 解决 push 重定向 跳转报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 解决 replace 重定向 跳转报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}

let router = new VueRouter({
    mode:'history',
    routes:[
        {
            //重定向，在项目跑起来的时候，访问/，立马定向到指定位置
            path:'/',
            redirect:'/home'
        },
        {
            name: 'home',
            path:'/home',
            component:()=>import('@/pages/Home'),
            meta:{title:'首页'}
        },
        //空白页,解决重复提交路由参数页面不重新渲染问题
        {
            name:'black',
            path:"/black",
            component:()=>import('@/components/Black.vue'),
        },
        //404页面，必须放在最后
        {
            path:'*',
            component:()=>import('@/components/404.vue')
        }
    ],
    //路由跳转后页面回到顶部
    //
    scrollBehavior (to, from, savedPosition) {
        return{
            x:0,
            y:0,
        }
    }

})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })

export default router