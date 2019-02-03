<template>
  <div class="section--intro">
    <div class="intro">
      <h3 class="intro-title">{{ content.title }}</h3>
      <p class="intro-copy" v-if="content.text">{{ content.text }}</p>
    </div>
  </div>
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
.intro {
  max-width: 715px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto 75px;
  text-align: center;
  color: #fff;

  &-title {
    font-size: 60px;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-family: 'Separat';
    font-weight: 700;
  }

  &-copy {
    font-size: 16px;
    line-height: 1.2;
    font-family: 'Work Sans';
    font-weight: 500;
  }

  @media (max-width: 1023px) {
    .intro-title {
      font-size: 30px;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
}
</style>
