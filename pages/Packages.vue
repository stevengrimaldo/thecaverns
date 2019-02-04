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

const api = 'http://dev-thecaverns.pantheonsite.io/wp-json/acf/v3/'

export default {
  components: {
    Hero,
    Packages
  },
  data() {
    return {
      hero: null,
      questions: null
    }
  },
  async asyncData({ params }) {
    const pageResponse = await axios.get(`${api}pages/80`)

    const acf = pageResponse.data.acf

    const data = {
      hero: acf.hero,
      packages: acf.packages
    }

    return data
  }
}
</script>
