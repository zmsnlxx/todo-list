import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CompositionApi from '@vue/composition-api'
import '@/styles/index.less'
import '@/components'
import { getToken } from '@/util/token'
import { Toast } from 'vant'
Vue.config.productionTip = false
Vue.use(CompositionApi)

router.beforeEach(async (to: any, from: any, next: any) => {
  const token = getToken()
  if (token) {
    next()
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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
