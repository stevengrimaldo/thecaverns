import Vue from 'vue'

const hasClass = (el, className) => {
  const re = new RegExp('(\\s|^)' + className + '(\\s|$)')

  return el.classList
    ? el.classList.contains(className)
    : el.className.match(re)
}

const addClass = (el, className) => {
  if (el.classList) {
    el.classList.add(className)
  } else if (!hasClass(el, className)) {
    el.className += ' ' + className
  }
}

const get = (url, success) => {
  const xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : // eslint-disable-next-line no-undef
      new ActiveXObject('Microsoft.XMLHTTP')

  xhr.open('GET', url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState > 3 && xhr.status === 200) {
      success(xhr.responseText)
    }
  }

  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.send()
  return xhr
}

Vue.prototype.$extractSvgs = els => {
  const elem = [].slice.call(els)

  elem.forEach(el => {
    const that = el
    const parent = that.parentNode
    const id = that.getAttribute('id')
    const selector = that.getAttribute('class')
    const src = that.getAttribute('src')

    get(src, data => {
      const oParser = new DOMParser()
      const oDOM = oParser.parseFromString(data, 'image/svg+xml')
      const svgEl = oDOM.documentElement

      if (id) {
        svgEl.setAttribute('id', id)
      }

      if (selector) {
        addClass(svgEl, selector)
      }

      addClass(svgEl, 'replaced-svg')
      svgEl.removeAttribute('xmlns:a')

      parent.innerHTML = ''
      parent.appendChild(svgEl)
    })
  })
}
