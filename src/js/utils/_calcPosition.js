export default (div) => {
  const windowHeight = document.documentElement.offsetHeight;
  const docScroll = document.documentElement.scrollTop;
  const divPosition = div.offsetTop;
  const divHeight = div.clientHeight;
  const hiddenBefore = docScroll - divPosition;
  const hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);

  let result = 100;

  if (docScroll > divPosition + divHeight || divPosition > docScroll + windowHeight) {
    return 0;
  }

  if (hiddenBefore > 0) {
    result -= (hiddenBefore * 100) / divHeight;
  }

  if (hiddenAfter > 0) {
    result -= (hiddenAfter * 100) / divHeight;
  }

  return (result / 100); // dividing by 100 to get the decimal version for opacity usage
};
