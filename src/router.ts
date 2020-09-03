import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import NotFound from '@/pages/404.vue'
import Home from '@/pages/home/index.vue'
import RootLayout from '@/pages/RootLayout.vue'
import Login from '@/pages/other/Login.vue'
import statistics from '@/pages/statistics/routes'
import personal from '@/pages/personal/routes'


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'RootLayout', component: RootLayout, children: [{ path: '', name: 'Home', meta: { title: '首页', root: true }, component: Home }] },
  { path: '/login', name: 'Login', meta: { title: '登录页面', custom: true }, component: Login },
  personal, statistics,

  { path: '*', name: 'NotFound', meta: { title: '404', custom: true }, component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

window.router = router

export default router;
