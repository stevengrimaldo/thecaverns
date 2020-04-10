import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4d8903cc = () => interopDefault(import('../../src/pages/About.vue' /* webpackChunkName: "pages/About" */))
const _704e477e = () => interopDefault(import('../../src/pages/Packages.vue' /* webpackChunkName: "pages/Packages" */))
const _6a2853e8 = () => interopDefault(import('../../src/pages/Questions.vue' /* webpackChunkName: "pages/Questions" */))
const _1462829e = () => interopDefault(import('../../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

const scrollBehavior = async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      if (to.hash) {
        const findEl = (hash, x) => {
          return (
            document.querySelector(hash) ||
            new Promise((resolve, reject) => {
              if (x > 50) {
                return resolve()
              }
              setTimeout(() => {
                resolve(findEl(hash, ++x || 1))
              }, 100)
            })
          )
        }

        const el = await findEl(to.hash)

        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/About",
      component: _4d8903cc,
      name: "About"
    }, {
      path: "/Packages",
      component: _704e477e,
      name: "Packages"
    }, {
      path: "/Questions",
      component: _6a2853e8,
      name: "Questions"
    }, {
      path: "/",
      component: _1462829e,
      name: "index"
    }],

    fallback: false
  })
}
