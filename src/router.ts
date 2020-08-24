import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import NotFound from '@/pages/404.vue'
import home from '@/pages/home/routes'
import statistics from '@/pages/statistics/routes'
import personal from '@/pages/personal/routes'


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  home, personal, statistics,

  { path: '*', name: 'NotFound', meta: { title: '404' }, component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

window.router = router

export default router;
