export default {
  path: '/',
  meta: { update: true },
  component: () => import('@/pages/home/Layout.vue'),
  children: [
    { path: '', name: 'Home', meta: { title: '首页', custom: true }, component: () => import('@/pages/home/index.vue') },
  ]
}
