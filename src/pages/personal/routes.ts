export default {
  path: '/personal',
  meta: { update: true },
  component: () => import('@/pages/personal/Layout.vue'),
  children: [
    { path: '', name: 'Personal', meta: { title: '个人中心', custom: true }, component: () => import('@/pages/personal/index.vue') },
    { path: '/style', name: 'SetStyle', meta: { title: '一键换肤' }, component: () => import('@/pages/personal/personality.vue') },
  ]
}
