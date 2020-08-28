import RootLayout from '@/pages/RootLayout.vue'

export default {
  path: '/personal',
  component: RootLayout,
  children: [
    { path: '', name: 'Personal', meta: { title: '个人中心', custom: true, root: true }, component: () => import('@/pages/personal/index.vue') },
    { path: '/style', name: 'SetStyle', meta: { title: '一键换肤' }, component: () => import('@/pages/personal/personality.vue') },
    { path: '/setting', name: 'Setting', meta: { title: '设置' }, component: () => import('@/pages/personal/setting.vue') },
  ]
}
