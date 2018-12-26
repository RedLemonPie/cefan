import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
    mode: 'history',
    routes:[{
        path: '/homepage', component: require('../pages/homepage/index')
    },{
        path: '/register', component: require('../pages/user/register')
    },{
        path:'*',redirect:'/homepage'
    }]
})


// 输出router
export default router;
