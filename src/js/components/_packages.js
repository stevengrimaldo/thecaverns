const currentSelector = document.getElementsByClassName('packages');

const packages = document.querySelectorAll('.packages__item');

export default () => {
  if (currentSelector.length) {
    [].forEach.call(packages, (item) => {
      item.addEventListener(
        'click',
        () => {
          document.querySelector('.packages__item--active').classList.remove('packages__item--active');

          item.classList.add('packages__item--active');
        },
        false
      );
    });
  }
};
