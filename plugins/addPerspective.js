import Vue from 'vue'
import { TweenMax } from 'gsap'

Vue.prototype.$addPerspective = els => {
  const width = window.innerWidth / 2
  const height = window.innerHeight / 2

  const rotate = (ev, el) => {
    const rX = (height - ev.pageY) / 50
    const rY = (width - ev.pageX) / 25

    // add transforms to element
    TweenMax.set(el, { rotationX: rX, rotationY: rY })
  }

  document.addEventListener(
    'mousemove',
    ev => {
      ;[].forEach.call(els, el => {
        rotate(ev, el)
      })
    },
    false
  )
}
