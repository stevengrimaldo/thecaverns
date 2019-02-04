<template>
  <main>
    <Hero :backgroundcolor="hero.background_color" noshadow small :slides="hero.slides" />
    <section class="section section--questions section--white section--slant section--slant--top-right">
      <div class="section--wrapper">
        <Questions :questions="questions" />
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

import Hero from '~/components/Hero'
import Questions from '~/components/Questions'

const api = 'http://dev-thecaverns.pantheonsite.io/wp-json/acf/v3/'

export default {
  components: {
    Hero,
    Questions
  },
  data() {
    return {
      hero: null,
      questions: null
    }
  },
  async asyncData({ params }) {
    const pageResponse = await axios.get(`${api}pages/85`)

    const acf = pageResponse.data.acf

    const data = {
      hero: acf.hero,
      questions: acf.questions
    }

    return data
  }
}
</script>
