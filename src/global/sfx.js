export const sfxCSS = `
  [data-sfx] {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
    will-change: opacity, transform;
    transition-duration: 400ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.555, 0.205, 0.295, 0.975);
  }

  .sfx-visible, [data-sfx-static] {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  [data-sfx-headline], [data-sfx-paragraph], [data-sfx-fade], [data-sfx-mask], [data-sfx-static] {
    transform: none;
    transition: none;
  }

  .line-wrapper, [data-sfx-mask] {
    position: relative;
    overflow: hidden;
    transform: none;
    transition: none;
  }

  .sfx-mask {
    background-color: #999999;
    position: absolute;
    display: block;
    top: 13px;
    left: 0;
    width: 100%;
    height: 80%;
    z-index: 15;
  }

  .line, .line-wrapper, .paragraph-wrapper {
    overflow: hidden;
    white-space: nowrap;
  }
`
