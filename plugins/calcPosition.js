import Vue from 'vue'

Vue.prototype.$calcPosition = div => {
  const windowHeight = document.documentElement.offsetHeight
  const docScroll = document.documentElement.scrollTop
  const docOffset = docScroll + windowHeight
  const divPosition = div.offsetTop
  const divHeight = div.clientHeight
  const divOffset = divPosition + divHeight
  const hiddenBefore = docScroll - divPosition
  const hiddenAfter = divOffset - docOffset

  let result = 100

  if (
    docScroll > divPosition + divHeight ||
    divPosition > docScroll + windowHeight
  ) {
    return 0
  }

  if (hiddenBefore > 0) {
    result -= (hiddenBefore * 100) / divHeight
  }

  if (hiddenAfter > 0) {
    result -= (hiddenAfter * 100) / divHeight
  }

  return result / 100 // dividing by 100 to get the decimal version for opacity usage
}
