import { LoDashStatic } from 'lodash'
import { VueRouter } from 'vue-router/types/router'
import { Store } from 'vuex'

export interface State {
  user: User.Info | null
}

declare global {
  const _: LoDashStatic

  const router: VueRouter
  const store: Store<State>

  interface Window {
    router: VueRouter
    store: Store<State>
  }
}
