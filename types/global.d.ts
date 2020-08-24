import { LoDashStatic } from 'lodash'
import { VueRouter } from 'vue-router/types/router'
declare global {
  const _: LoDashStatic

  const router: VueRouter

  interface Window {
    router: VueRouter
  }
}
