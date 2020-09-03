import RootLayout from '@/pages/RootLayout.vue'

export default {
  path: '/',
  component: RootLayout,
  children: [
    { path: '', name: 'Home', meta: { title: '首页', custom: true, root: true }, component: () => import('@/pages/home/index.vue') },
    { path: 'list', name: 'HomeCheckList', meta: { title: '我的清单' }, component: () => import('@/pages/home/CheckList.vue') },
    { path: 'addTask/:parentId/:id?', name: 'AddTask', meta: { custom: true }, component: () => import('@/pages/home/AddTask.vue') },
  ]
}
