<template>
  <main>
    <Hero :backgroundcolor="hero.background_color" small :slides="hero.slides"/>
    <section
      class="section section--about section--half-padding section--white section--slant section--slant--top-right"
    >
      <div class="section--wrapper">
        <div class="about">
          <div class="about__content">
            <div class="wysiwyg" v-html="content.text">{{ content.text }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

import Hero from '~/components/Hero'

const wordpressURL = 'http://live-thecaverns.pantheonsite.io/wp-json/'
const pageNumber = 'pages/115'
const acfAPI = `${wordpressURL}acf/v3/${pageNumber}`
const pageAPI = `${wordpressURL}wp/v2/${pageNumber}`

export default {
  components: {
    Hero
  },
  data() {
    return {
      content: null,
      hero: null,
      meta: null,
      metaTitle: null
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: this.meta
    }
  },
  async asyncData({ params }) {
    const acfContent = await axios.get(acfAPI)
    const pageResponse = await axios.get(pageAPI)

    const acf = acfContent.data.acf
    const meta = pageResponse.data.yoast_meta
    const metaTitle = meta.forEach(item => {
      if (item.property === 'og:title') {
        return item.content
      }
    })

    const data = {
      content: acf.content,
      hero: acf.hero,
      meta,
      metaTitle
    }

    return data
  }
}
</script>

<style lang="stylus">
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
      color: #110a20;
      font-family: 'Separat';
      font-weight: 700;
    }

    p {
      font-size: 24px;
      line-height: 42px;
      color: #999;
      font-family: 'Work Sans';
      font-weight: 400;
    }

    .wysiwyg {
      text-align: left;

      img, iframe {
        max-width: 100%;
        width: 100%;
      }

      h2 {
        font-size: 48px;
        line-break: 52px;
        color: #110a20;
        font-family: 'Separat';
        font-weight: 700;
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
