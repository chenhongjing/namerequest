/* eslint-disable eol-last */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

/**
 * Configures and returns Vue Router.
 */

let appBaseURL = process.env.VUE_APP_NAMEX_API_URL + process.env.VUE_APP_NAMEX_API_VERSION // Global variable to store the custom base URL

export function getVueRouter () {
  Vue.use(VueRouter)
  return new VueRouter({
    mode: 'history',
    base: '',
    routes,
    scrollBehavior (to, from, savedPosition) {
      // see https://router.vuejs.org/guide/advanced/scroll-behavior.html
      return { x: 0, y: 0 }
    }
  })
}

export { appBaseURL }
