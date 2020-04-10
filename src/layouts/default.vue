<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Footer,
    Header
  },
  mounted() {
    // const svgs = document.querySelectorAll(
    //   'img[src$=".svg"]:not([data-no-extract])'
    // )

    this.questionsTop = document.querySelector('.section--questions')
    this.learnMore = document.querySelector('.about__content .cta')

    // this.$extractSvgs(svgs)
  }
}
</script>
