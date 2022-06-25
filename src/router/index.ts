import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "Index", // 命名路由
        component: ()=> import("../views/login.vue")
    },
    {
        path: '/ref',
        name: "Ref",
        component: ()=> import("../views/Ref/index.vue")
    },
    {
        path: '/reactive',
        name: "Reactive",
        component: ()=> import("../views/Reactive/index.vue")
    },
    {
        path: '/toref',
        name: "Toref",
        component: ()=> import("../views/ToRef/index.vue")
    },
];

const router = createRouter({
    /*
    * history 模式: 端口号后不带#号
    * 基于h5的history实现
    * 通过 window.addEventListener('popstate', (e) => {console.log(e)}) 监听浏览器前进后退  e.state.forward、e.state.back
    * */
    // history: createWebHistory(), //
    /*
    * hash 模式: 端口号后带#号
    * 通过 location.hash 切换路由
    * 原理是通过 window.addEventListener('hashchange', () => {}) 监听浏览器前进后退  e.newURL、e.oldURL
    * */
    history: createWebHashHistory(),
    routes
});

export default router
