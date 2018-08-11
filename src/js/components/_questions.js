import { TweenMax } from 'gsap';

const currentSelector = document.getElementsByClassName('questions');

const questions = document.querySelectorAll('.questions__item-question');
const answers = document.querySelectorAll('.questions__item-answer');

export default () => {
  if (currentSelector.length) {
    TweenMax.set(answers, { height: 0 });

    [].forEach.call(questions, (item) => {
      const parentItem = item.parentNode;

      item.addEventListener(
        'click',
        () => {
          const content = parentItem.querySelector('.questions__item-answer');

          if (parentItem.classList.contains('questions__item--active')) {
            TweenMax.to(content, 0.2, { height: 0 });
            parentItem.classList.remove('questions__item--active');
          } else {
            TweenMax.set(content, { height: 'auto' });
            TweenMax.from(content, 0.2, { height: 0 });
            parentItem.classList.add('questions__item--active');
          }
        },
        false
      );
    });
  }
};
