import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CompositionApi from '@vue/composition-api'
import '@/styles/index.less'
import '@/components'
import { getToken } from '@/utils/token'
import { Toast } from 'vant'
import { getUserInfo } from '@/pages/other/api'
Vue.config.productionTip = false
Vue.use(CompositionApi)

router.beforeEach(async (to: any, from: any, next: any) => {
  const token = getToken()
  if (token) {
    if (store.getters.user) {
      next()
    } else {
      const user = await getUserInfo()
      await store.dispatch('setUser', user)
      next()
    }
  } else {
    Toast.fail('请登录')
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

router.afterEach((to) => {
  document.title = to.meta.title || document.title
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
