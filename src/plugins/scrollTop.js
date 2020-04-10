import Vue from 'vue'
import { TweenMax } from 'gsap'
// eslint-disable-next-line no-unused-vars
// import ScrollToPlugin from 'gsap/ScrollToPlugin'

Vue.prototype.$scrollTop = () => {
  TweenMax.to(window, 0.3, { scrollTo: 0 })
}
