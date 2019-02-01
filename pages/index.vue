<template>
  <main>
    <Hero/>
    <About/>
    <Shows :shows="shows"/>
    <Packages :packages="packages"/>
    <Questions :questions="questions"/>
  </main>
</template>

<script>
import { TweenLite } from 'gsap'
import axios from 'axios'

import About from '~/components/About'
import Hero from '~/components/Hero'
import Packages from '~/components/Packages'
import Questions from '~/components/Questions'
import Shows from '~/components/Shows'

export default {
  components: {
    About,
    Hero,
    Packages,
    Questions,
    Shows
  },
  data() {
    return {
      learnMore: null,
      packages: [],
      questions: [],
      questionsTop: 0,
      shows: []
    }
  },
  async asyncData({ params }) {
    const shows = await axios.get(
      'http://wordpress.local/wp-json/wp/v2/shows?_embed'
    )

    const packages = await axios.get(
      'http://wordpress.local/wp-json/wp/v2/packages?_embed'
    )

    const questions = await axios.get(
      'http://wordpress.local/wp-json/wp/v2/questions?_embed'
    )

    return {
      packages: packages.data,
      questions: questions.data,
      shows: shows.data.slice(0, 8)
    }
  },
  mounted() {
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
