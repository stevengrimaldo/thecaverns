<template>
  <section class="section section--hero" :class="[{ 'section--hero--small': small }, { 'section--hero--shadow': !noshadow }, { 'section--orange': backgroundcolor === 'orange' }]">
    <div ref="heroStatic" class="hero__static" />
    <div
      v-if="slides && slides.length > 0"
      class="slick"
    >
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="slide"
      >
        <div
          v-if="slide.background_image"
          ref="heroImage"
          class="hero__image"
        >
          <img :src="slide.background_image" alt="">
        </div>
        <div class="section--wrapper">
          <div ref="heroContent" class="hero__content">
            <div class="hero__content-text">
              <div v-if="slide.icon" class="bgu-logo">
                <img :src="slide.icon" alt="">
              </div>
              <h1>
                {{ slide.title }}
                <small v-if="slide.sub_title">
                  {{ slide.sub_title }}
                </small>
              </h1>
              <p v-if="slide.text">
                {{ slide.text }}
              </p>
              <div v-if="slide.link !== ''" class="cta cta--button">
                <a :href="slide.link.url" :target="slide.link.target">
                  {{ slide.link.title }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TweenLite } from 'gsap'
import $ from 'jquery'

if (process.client) {
  require('slick-carousel')
}

export default {
  props: {
    backgroundcolor: {
      type: String,
      default: ''
    },
    noshadow: {
      type: Boolean,
      default: false
    },
    slides: {
      type: Array,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      offsetTop: 0
    }
  },
  mounted() {
    this.offsetTop =
      document.documentElement.scrollTop || document.body.scrollTop
    this.setPosition(this.offsetTop)

    if (this.slides.length > 0 && process.client) {
      $('.slick').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1
      })
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.offsetTop =
        document.documentElement.scrollTop || document.body.scrollTop
      this.setPosition(this.offsetTop)
    },
    setPosition(pageOffset) {
      if (
        pageOffset <= this.$refs.heroStatic.clientHeight &&
        document.documentElement.clientWidth > 768
      ) {
        const scaleFactor = pageOffset / 2000
        const opacityFactor = pageOffset / 400
        const yFactor = pageOffset / 3
        const y = yFactor * -1
        const scale = 1 + scaleFactor
        const opacity = 1 - opacityFactor

        if (this.$refs.heroImage) {
          TweenLite.set(this.$refs.heroImage, {
            force3D: true,
            y,
            scale,
            opacity
          })
        }

        TweenLite.set(this.$refs.heroContent, {
          force3D: true,
          y,
          opacity
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.section--hero {
  margin-top: 100px;

  .slick-slide {
    > div > div {
      position: relative;
    }
  }

  &--orange {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 4;
      background: linear-gradient(to bottom, rgba(17, 10, 32, 0) 50%, rgba(17, 10, 32, 1) 100%);
    }
  }

  &--shadow {
    .slick-slide {
      > div > div {
        .hero__image {
          img {
            max-width: 100vw;
            width: 100%;
          }
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
          background: linear-gradient(to bottom, rgba(17, 10, 32, 0) 50%, rgba(17, 10, 32, 1) 100%);
        }
      }
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    z-index: 10;
    text-align: center;

    > li {
      font-size: 0;
      width: 20px;
      height: 20px;
      border: 5px solid #fff;
      border-radius: 50%;
      display: inline-block;
      margin: 10px;
      cursor: pointer;

      &.slick-active {
        border-color: #f64a19;
      }
    }
  }
}

.hero {
  &__static {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 720px;
  }

  &__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) !important;
    right: 0;
    width: 100vw;
    overflow: hidden;

    img {
      width: 100vw;
      max-height: 100%;
    }
  }

  &__content {
    max-width: 675px;
    width: 100%;
    color: #fff;

    .bgu-logo {
      margin-bottom: 20px;
    }

    h1 {
      font-size: 62px;
      line-height: 56px;
      text-transform: uppercase;
      font-family: 'Separat';
      font-weight: 700;
      letter-spacing: 1.55px;

      small {
        margin: 30px 0 -10px;
        text-transform: lowercase;
        font-size: 50%;
        display: inline-block;
        transform: translate3d(0, -85%, 0);
      }
    }

    p {
      margin-top: 10px;
      font-size: 16px;
      line-height: 20px;
      font-family: 'Work Sans';
      font-weight: 600;
      margin-top: -30px;
    }

    .cta--button {
      margin-top: 30px;

      &:hover {
        > a,
        > span {
          border: 1px solid #fff;
        }
      }
    }
  }

  @media (max-width: 767px) {
    &__static {
      min-height: initial;
      height: auto;
    }

    &__image {
      height: 100%;
    }

    &__content {
      h1 {
        font-size: 40px;
        line-height: 38px;
      }

      p {
        margin-top: 15px;
      }
    }
  }
}
</style>
