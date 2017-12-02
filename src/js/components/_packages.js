const currentSelector = document.getElementsByClassName('packages');

const packages = document.querySelectorAll('.packages__item');

export default () => {
  if (currentSelector.length) {
    Array.from(packages).forEach((item) => {
      item.addEventListener('click', function () {
        document.querySelector('.packages__item--active').classList.remove('packages__item--active');

        this.classList.add('packages__item--active');
      }, false);
    });
  }
};
