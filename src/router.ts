import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import NotFound from '@/pages/404.vue'
import Login from '@/pages/other/Login.vue'
import home from '@/pages/home/routes'
import statistics from '@/pages/statistics/routes'
import personal from '@/pages/personal/routes'


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // { path: '/', name: 'RootLayout', component: RootLayout, children: [{ path: '', name: 'Home', meta: { title: '首页', root: true }, component: Home }] },

  home, personal, statistics,
  { path: '/login', name: 'Login', meta: { title: '登录页面', custom: true }, component: Login },

  { path: '*', name: 'NotFound', meta: { title: '404', custom: true }, component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

window.router = router

export default router;
