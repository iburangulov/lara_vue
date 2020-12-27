import vueRouter from "vue-router";
import Vue from "vue"


import index from './components/index'
import blog from './components/blog'

Vue.use(vueRouter);

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/blog',
        component: blog
    }
];

export default new vueRouter({
    mode: 'history',
    routes: routes
});
