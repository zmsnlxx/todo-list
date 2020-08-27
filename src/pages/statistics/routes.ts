import RootLayout from '@/pages/RootLayout.vue'

export default {
  path: '/statistics',
  component: RootLayout,
  children: [
    { path: '', name: 'Statistics', meta: { title: '统计中心', custom: true, root: true }, component: () => import('@/pages/statistics/index.vue') },
  ]
}
