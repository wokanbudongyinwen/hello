import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home  = () => import('../page/home');
const test  = () => import('../page/test');

const routes = [
    {
        path: '/',
        component: home,
        meta: [],
    },
    {
        path:'/home',
        component:home,
    },
    {
        path:'/test',
        component:test,
        meta:["导航","测试"],
    }
];

export default new Router({
    routes,
})