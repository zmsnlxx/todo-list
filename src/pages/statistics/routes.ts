export default {
  path: '/statistics',
  meta: { update: true },
  component: () => import('@/pages/statistics/Layout.vue'),
  children: [
    { path: '', name: 'Statistics', meta: { title: '统计中心' }, component: () => import('@/pages/statistics/index.vue') },
  ]
}
