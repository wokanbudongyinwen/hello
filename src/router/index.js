import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login  = () => import('../page/login');
const home  = () => import('../page/home');
const test  = () => import('../page/test');
const manage = () =>import('../page/manage');

const routes = [
    {
        path: '/',
        component: login,
        meta: [],
    },
    {
        path:'/manage',
        component: manage,
        meta:[],
        children:[
            {
                path:'',
                component:home,
            },
            {
                path:'/test',
                component:test,
                meta:["数据展示","商品"],
            }
        ]
    }
];

export default new Router({
    routes,
})