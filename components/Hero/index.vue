<template>
  <section :class="{ 'section--hero--small': small, 'section--hero--shadow': !no-shadow, 'section--orange': background-color === 'orange' }" class="section section--hero">
    <div ref="heroStatic" class="hero__static" />
    <div
      v-if="slides && slides.length > 0"
      class="slick"
      data-slick='{
        "arrows": false,
        "dots": true,
        "infinite": false,
        "slidesToScroll": 1,
        "slidesToShow": 1
      }'
    >
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="slide"
      >
        <div
          ref="heroImage"
          class="hero__image"
          v-if="slide.backgroundImage"
        >
          <img :src="slide.backgroundImage" alt="" />
        </div>
        <div class="section--wrapper">
          <div ref="heroContent" class="hero__content">
            <div class="hero__content-text">
              <div class="bgu-logo" v-if="slide.icon">
                <img :src="slide.icon" alt="">
              </div>
              <h1>{{ slide.title }}<small v-if="slide.subTitle">{{ slide.subTitle }}.</small></h1>
              <p v-if="slide.text">{{ slide.text }}</p>
              <div class="cta cta--button" v-if="slide.link != null">
                <a :href="slide.link.url">{{ slide.link.text }}</a>
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
    'background-color': {
      type: String,
      default: 'none'
    },
    'no-shadow': {
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

    if (this.$refs.heroImage && process.client) {
      $('.slick').slick()
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

<style lang="stylus" scoped>
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
    top: 100px;
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
        margin-bottom: -10px;
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
