export default {
  path: '/personal',
  meta: { update: true },
  component: () => import('@/pages/personal/Layout.vue'),
  children: [
    { path: '', name: 'Personal', meta: { title: '个人中心' }, component: () => import('@/pages/personal/index.vue') },
  ]
}
