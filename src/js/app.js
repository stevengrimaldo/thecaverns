import { TweenMax } from 'gsap';
import { extractSvg } from 'common_';

import shows from './components/_shows';
import packages from './components/_packages';
import questions from './components/_questions';
import addPerspective from './utils/_addPerspective';
import scrollTop from './utils/_scrollTop';

import '../scss/app.scss';

const isDesktop = window.matchMedia('(min-width: 1025px)');
const eyeBall = document.querySelectorAll('.logo--eye');
const svgs = document.querySelectorAll('img[src$=".svg"]:not([data-no-extract])');
const arrowUp = document.querySelector('.arrow');
let offsetTop = 0;

const setPosition = (pageOffset) => {
  if (pageOffset <= document.querySelector('.hero__static').clientHeight && document.documentElement.clientWidth > 768) {
    TweenMax.set('.hero__image', {
      force3D: true,
      y: (pageOffset / 3) * -1,
      scale: 1 + (pageOffset / 2000),
      opacity: 1 - (pageOffset / 400)
    });
    TweenMax.set('.hero__content', {
      force3D: true,
      y: (pageOffset / 3) * -1,
      opacity: 1 - (pageOffset / 400)
    });
  }
};

window.addEventListener('load', () => {
  offsetTop = document.documentElement.scrollTop;
  extractSvg(svgs);
  addPerspective(eyeBall, isDesktop);
  setPosition(offsetTop);
  packages();
  questions();
  shows();

  arrowUp.addEventListener('click', () => {
    scrollTop();
  }, false);
});

window.addEventListener('scroll', () => {
  offsetTop = document.documentElement.scrollTop;
  setPosition(offsetTop);
});
