<template>
  <main>
    <Hero :backgroundcolor="hero.background_color" :slides="hero.slides" />
    <BrandIntro :content="brandIntro" />
    <section id="shows" class="section section--shows section--half-top-padding section--white section--slant section--slant--bottom-right" name="shows">
      <Intro :content="showsIntro" />
      <div class="section--wrapper">
        <Shows preview :shows="shows" />
        <div class="shows__more">
          <div class="cta cta--button">
            <a
              href="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
              target="_blank"
            >
              See All Shows
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--packages section--slant section--slant--top-left section--slant--bottom-left">
      <Intro :content="packagesIntro" />
      <div class="section--wrapper">
        <Packages preview :packages="packages" />
      </div>
    </section>
    <section class="section section--questions section--white section--slant section--slant--top-right">
      <Intro :content="questionsIntro" />
      <div class="section--wrapper">
        <Questions preview :questions="questions" />
        <div class="questions__cta">
          <div class="cta cta--button">
            <nuxt-link to="/questions">
              View All Questions
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

import BrandIntro from '~/components/BrandIntro'
import Hero from '~/components/Hero'
import Intro from '~/components/Intro'
import Packages from '~/components/Packages'
import Questions from '~/components/Questions'
import Shows from '~/components/Shows'

const wordpressURL = 'http://live-thecaverns.pantheonsite.io/wp-json/'
const pageNumber = 'pages/281'
const acfAPI = `${wordpressURL}acf/v3/${pageNumber}`
const pageAPI = `${wordpressURL}wp/v2/${pageNumber}`

export default {
  components: {
    BrandIntro,
    Hero,
    Intro,
    Packages,
    Questions,
    Shows
  },
  data() {
    return {
      brandIntro: null,
      hero: null,
      meta: null,
      metaTitle: null,
      packages: null,
      packagesIntro: null,
      questions: null,
      questionsIntro: null,
      questionsTop: 0,
      shows: null,
      showsIntro: null
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
      brandIntro: acf.brand_intro,
      hero: acf.hero,
      meta,
      metaTitle,
      packages: acf.packages,
      packagesIntro: acf.packages_intro,
      questions: acf.questions,
      questionsIntro: acf.questions_intro,
      shows: acf.shows,
      showsIntro: acf.shows_intro
    }

    return data
  }
}
</script>

<style lang="stylus" scoped>
.shows {
  &__legend {
    color: #ccc;
    padding: 0 1%;
    margin-bottom: 10px;
    font-family: 'Work Sans';
    font-weight: 400;

    .icon {
      transform: translate3d(0, 2px, 0);

      svg {
        fill: #110a20;
      }
    }
  }

  &__more {
    text-align: center;
    margin-top: 30px;

    p {
      margin-top: 20px;
      font-family: 'Work Sans';
      font-weight: 500;

      a {
        color: #f64a19;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 959px) {
    &__legend {
      text-align: center;
    }
  }
}

.questions {
  &__cta {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
