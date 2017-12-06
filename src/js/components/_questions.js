import { TweenMax } from 'gsap';

const currentSelector = document.getElementsByClassName('questions');

const questions = document.querySelectorAll('.questions__item-question');
const answers = document.querySelectorAll('.questions__item-answer');

export default () => {
  if (currentSelector.length) {
    TweenMax.set(answers, { height: 0 });

    Array.from(questions).forEach((item) => {
      item.addEventListener('click', function () {
        const content = this.parentNode.querySelector('.questions__item-answer');

        if (this.parentNode.classList.contains('questions__item--active')) {
          TweenMax.to(content, 0.2, { height: 0 });
          this.parentNode.classList.remove('questions__item--active');
        } else {
          TweenMax.set(content, { height: 'auto' });
          TweenMax.from(content, 0.2, { height: 0 });
          this.parentNode.classList.add('questions__item--active');
        }
      }, false);
    });
  }
};
