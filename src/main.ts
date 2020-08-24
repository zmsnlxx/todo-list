import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CompositionApi from '@vue/composition-api'
import '@/components'
import '@/styles/index.less'



Vue.config.productionTip = false
Vue.use(CompositionApi)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
