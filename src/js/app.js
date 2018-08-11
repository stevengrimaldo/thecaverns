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
const learnMore = document.querySelector('.about__content .cta');
const heroStatic = document.querySelector('.hero__static');
const heroImage = document.querySelector('.hero__image');
const heroContent = document.querySelector('.hero__content');
const questionsTop = document.querySelector('.section--questions').offsetTop;
let offsetTop = 0;

const setPosition = (pageOffset) => {
  if (pageOffset <= heroStatic.clientHeight && document.documentElement.clientWidth > 768) {
    const scaleFactor = pageOffset / 2000;
    const opacityFactor = pageOffset / 400;
    const yFactor = pageOffset / 3;

    TweenMax.set(heroImage, {
      force3D: true,
      y: yFactor * -1,
      scale: 1 + scaleFactor,
      opacity: 1 - opacityFactor
    });
    TweenMax.set(heroContent, {
      force3D: true,
      y: yFactor * -1,
      opacity: 1 - opacityFactor
    });
  }
};

const scrollToQuestions = () => {
  TweenMax.to(window, 0.3, { scrollTo: questionsTop });
};

window.addEventListener('load', () => {
  offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
  extractSvg(svgs);
  addPerspective(eyeBall, isDesktop);
  setPosition(offsetTop);

  packages();
  questions();
  shows();

  arrowUp.addEventListener(
    'click',
    () => {
      scrollTop();
    },
    false
  );
  learnMore.addEventListener(
    'click',
    () => {
      scrollToQuestions();
    },
    false
  );
});

window.addEventListener('scroll', () => {
  offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
  setPosition(offsetTop);
});
