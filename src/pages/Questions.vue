<template>
  <main>
    <Hero :backgroundcolor="hero.background_color" noshadow small :slides="hero.slides"/>
    <section
      class="section section--questions section--white section--slant section--slant--top-right"
    >
      <div class="section--wrapper">
        <Questions :questions="questions"/>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

import Hero from '~/components/Hero'
import Questions from '~/components/Questions'

const wordpressURL = 'http://live-thecaverns.pantheonsite.io/wp-json/'
const pageNumber = 'pages/85'
const acfAPI = `${wordpressURL}acf/v3/${pageNumber}`
const pageAPI = `${wordpressURL}wp/v2/${pageNumber}`

export default {
  components: {
    Hero,
    Questions
  },
  data() {
    return {
      hero: null,
      meta: null,
      metaTitle: null,
      questions: null
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
      hero: acf.hero,
      meta,
      metaTitle,
      questions: acf.questions
    }

    return data
  }
}
</script>
