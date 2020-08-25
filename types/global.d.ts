import { LoDashStatic } from 'lodash'
import { VueRouter } from 'vue-router/types/router'
import { Store } from 'vuex'

export interface State {
  user: any | null
}

declare global {
  const _: LoDashStatic

  const router: VueRouter

  interface Window {
    router: VueRouter
    store: Store<State>
  }
}
