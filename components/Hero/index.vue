<template>
  <section class="section section--hero">
    <div ref="heroStatic" class="hero__static"/>
    <div ref="heroImage" class="hero__image">
      <img src="~/assets/img/hero-image.jpg" alt>
    </div>
    <div class="section--wrapper">
      <div ref="heroContent" class="hero__content">
        <div class="hero__content-text">
          <div class="bgu-logo">
            <img src="~/assets/img/bgu-logo.png" alt="Blue Grass Underground Logo">
          </div>
          <h1>Bluegrass
            <br>Underground
            <br>
            <small>live from the caverns.</small>
          </h1>
          <p>Bluegrass Underground is a musical adventure series presented by PBS affiliate WCTE that airs across the US on PBS stations. The series shines a light on purveyors of musical authenticity in a space unlike any other on (or under) earth.</p>
          <div class="cta cta--button">
            <a
              href="http://www.pbs.org/bluegrass-underground/home"
              target="_blank"
            >Join The Underground</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TweenLite } from 'gsap'

export default {
  data() {
    return {
      offsetTop: 0
    }
  },
  mounted() {
    this.offsetTop =
      document.documentElement.scrollTop || document.body.scrollTop
    this.setPosition(this.offsetTop)
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

        TweenLite.set(this.$refs.heroImage, {
          force3D: true,
          y,
          scale,
          opacity
        })

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
    background: linear-gradient(
      to bottom,
      rgba(17, 10, 32, 0) 0%,
      rgba(17, 10, 32, 1) 100%
    );
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
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 720px;
    overflow: hidden;

    img {
      min-width: 100%;
      max-height: 720px;
      width: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }

  &__content {
    max-width: 675px;
    width: 100%;
    color: #fff;

    // max-width: 675px;
    // color: #fff;
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // height: 720px;
    // display: flex;
    // padding: 0 6.9444444444%;
    // align-items: center;
    // width: 100%;
    // z-index: 5;
    .bgu-logo {
      margin-bottom: 15px;
    }

    h1 {
      font-size: 62px;
      line-height: 56px;
      text-transform: uppercase;
      margin-bottom: -15px;
      font-family: 'Separat';
      font-weight: 700;
      letter-spacing: 1.55px;

      small {
        text-transform: lowercase;
        font-size: 50%;
        display: inline-block;
        transform: translate3d(0, -40%, 0);
      }
    }

    p {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
      font-family: 'Work Sans';
      font-weight: 600;
    }

    .cta--button {
      &:hover {
        > a, > span {
          border: 1px solid #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
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
