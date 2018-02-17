import { TweenMax } from 'gsap';

const currentSelector = document.getElementsByClassName('shows');

const showMore = document.querySelector('.shows__more .cta');

const isDesktop = window.matchMedia('(min-width: 1151px)');
const isTabletMax = window.matchMedia('(max-width: 1150px)');
const isTabletMin = window.matchMedia('(min-width: 901px)');
const isPhabletMax = window.matchMedia('(max-width: 900px)');
const isPhabletMin = window.matchMedia('(min-width: 551px)');
const isMobile = window.matchMedia('(max-width: 550px)');

let offset = 4;
let visible = 4;

if (isDesktop.matches) {
  offset = 4;
} else if (isTabletMax.matches && isTabletMin.matches) {
  offset = 3;
} else if (isPhabletMax.matches && isPhabletMin.matches) {
  offset = 2;
} else if (isMobile.matches) {
  offset = 1;
}

export default () => {
  if (currentSelector.length) {
    showMore.addEventListener('click', () => {
      const shows = document.querySelectorAll('.shows__item');

      [].forEach.call(shows, (show, i) => {
        if (show.offsetHeight === 0 && i < offset + offset) {
          show.style.display = 'block';
          setTimeout(() => {
            TweenMax.to(show, 1, { opacity: 1, y: 0 });
          }, 40 * i);
        } else if (show.offsetHeight > 0 && i > offset - 1) {
          // is visible and past first 4
          offset += 1;
        } else if (show.offsetHeight > 0) {
          visible += 1;
          if (visible === shows.length) {
            showMore.style.display = 'none';
          }
        }
      });
    }, false);
  }
};
