<template>
  <section class="section section--about section--half-bottom-padding section--white section--slant section--slant--top-right">
    <div class="section--wrapper">
      <div class="about">
        <div class="about__content">
          <div class="logo logo--full">
            <i>
              <img src="~/assets/svg/logo-full.svg" alt="" />
            </i>
          </div>
          <h6>{{ content.title }}</h6>
          <p>{{ content.text }}</p>
          <hr class="about__divider" />
          <div class="cta cta--button cta--button--inverted">
            <nuxt-link to="/about">Learn More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.about {
  &__divider {
    background-color: rgba(#999, 0.5);
    width: 50%;
    height: 1px;
    margin: 30px auto 0;
  }

  &__content {
    perspective: 2000px;
    perspective-origin: top;
    text-align: center;

    .logo {
      margin-bottom: 30px;
      transform-style: preserve-3d;
      will-change: transform;
    }

    h6 {
      margin-bottom: 15px;
      font-size: 28px;
      line-height: 32px;
      color: $haiti;
      font-family: 'Separat';
      font-weight: 700;
    }

    p {
      font-size: 24px;
      line-break: 38px;
      color: #999;
      font-family:'Work Sans';
      font-weight: 400;
    }

    .wysiwyg {
      text-align: left;

      img, iframe {
        max-width: 100%;
        width: 100%;
      }

      p {
        margin: 40px 0;
        line-height: 40px;
      }
    }

    .cta {
      margin-top: 30px;
    }
  }

  @media (max-width: 1023px) {
    &__content {
      padding-left: 20px;
      padding-right: 20px;

      h6 {
        font-size: 15px;
      }
    }
  }
}

</style>
