import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from '@/pages/home/index.vue'
import RootLayout from '@/pages/RootLayout.vue'
import NotFound from '@/pages/404.vue'


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', component: RootLayout, children: [{ path: '', name: 'Home', meta: { title: '首页', root: true }, component: Home }] },


  { path: '*', name: 'NotFound', meta: { title: '404' }, component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

window.router = router

export default router;
