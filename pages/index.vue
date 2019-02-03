<template>
  <main>
    <Hero :backgroundColor="hero.background_color" :hero="hero.slides" />
    <BrandIntro :content="brandIntro" />
    <section class="section section--shows section--half-top-padding section--white section--slant section--slant--bottom-right">
      <Intro :content="showsIntro" />
      <div class="section--wrapper">
        <Shows preview :shows="shows" />
        <div class="shows__more">
          <div class="cta cta--button">
            <a
              href="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
              target="_blank"
            >See All Shows</a>
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
            <nuxt-link to="/questions">View All Questions</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { TweenLite } from 'gsap'
import axios from 'axios'

import BrandIntro from '~/components/BrandIntro'
import Hero from '~/components/Hero'
import Intro from '~/components/Intro'
import Packages from '~/components/Packages'
import Questions from '~/components/Questions'
import Shows from '~/components/Shows'

const api = 'http://dev-thecaverns.pantheonsite.io/wp-json/wp/v2/'

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
      learnMore: null,
      packages: null,
      packagesIntro: null,
      questions: null,
      questionsIntro: null,
      questionsTop: 0,
      shows: null,
      showsIntro: null
    }
  },
  async asyncData({ params }) {
    const pageResponse = await axios.get(`${api}pages/281?_embed`).data

    const data = {
      brandIntro: pageResponse.brand_intro,
      hero: pageResponse.hero,
      packages: pageResponse.packages.slice(0, 4),
      packagesIntro: pageResponse.packages_intro,
      questions: pageResponse.questions.slice(0, 4),
      questionsIntro: pageResponse.questions_intro,
      shows: pageResponse.shows.slice(0, 8),
      showsIntro: pageResponse.shows_intro
    }

    return data
  },
  created() {
    const eyeBall = document.querySelectorAll('.logo--eye')
    const svgs = document.querySelectorAll(
      'img[src$=".svg"]:not([data-no-extract])'
    )

    this.questionsTop = document.querySelector('.section--questions')
    this.learnMore = document.querySelector('.about__content .cta')

    this.$extractSvgs(svgs)
    this.$addPerspective(eyeBall)

    this.learnMore.addEventListener('click', this.scrollToQuestions)
  },
  beforeDestroy() {
    this.learnMore.removeEventListener('click', this.scrollToQuestions)
  },
  methods: {
    scrollToQuestions() {
      TweenLite.to(window, 0.3, { scrollTo: this.questionsTop })
    }
  }
}
</script>
