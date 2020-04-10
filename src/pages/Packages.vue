<template>
  <main>
    <Hero :backgroundcolor="hero.background_color" small :slides="hero.slides" />
    <section
      v-for="(pkg, i) in packages"
      :id="'anchor' + pkg.ID"
      :key="pkg.id"
      class="section section--packages"
      :class="[{ 'section--white section--slant section--slant--top-left': i % 2 !== 0 }, { 'section--slant--bottom-left': i % 2 !== 0 && i + 1 !== packages.length }, { 'section--slant section--slant--top-right': i % 2 === 0 }, { 'section--slant--bottom-right': i % 2 === 0 && i + 1 !== packages.length }]"
      :name="'acnhor' + pkg.ID"
    >
      <div class="section--wrapper">
        <Packages :inverted="i % 2 === 0 || false" :packages="[pkg]" />
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

import Hero from '~/components/Hero'
import Packages from '~/components/Packages'

const wordpressURL = 'http://live-thecaverns.pantheonsite.io/wp-json/'
const pageNumber = 'pages/80'
const acfAPI = `${wordpressURL}acf/v3/${pageNumber}`
const pageAPI = `${wordpressURL}wp/v2/${pageNumber}`

export default {
  components: {
    Hero,
    Packages
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
      packages: acf.packages
    }

    return data
  }
}
</script>
