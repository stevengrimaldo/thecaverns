import { TweenMax } from 'gsap';
// eslint-disable-next-line no-unused-vars
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default () => {
  TweenMax.to(window, 0.3, { scrollTo: 0 });
};
