<template>
  <div class="packages--wrapper">
    <div
      v-if="packages && packages.length > 0"
      :class="{ 'packages--preview': preview }"
      class="packages"
    >
      <div
        v-for="(pkg, i) in packages"
        :key="pkg.id"
        :class="{ 'packages__item--active': activeIndex === i }"
        class="packages__item"
        @:click="toggleActive(i)"
      >
        <div class="packages__item-content">
          <div class="packages__item-content__title">
            <h5 v-html="pkg.post_title">{{ pkg.post_title }}</h5>
          </div>
          <div class="packages__item-content__text">
            <div v-html="pkg.acf.description">{{ pkg.acf.description }}</div>
            <ul>
              <li v-for="feature in pkg.acf.features" :key="feature.id">{{ feature }}</li>
            </ul>
          </div>
          <div class="cta cta--button cta--button--inverted">
            <a
              href="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
              target="_blank"
            >Buy Package</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packages: {
      type: Array,
      default: null
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    toggleActive(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.packages {
  &__item {
    &-content {
      &__text {
        padding: 20px;
      }

      h5,
      h6,
      p,
      li {
        margin-bottom: 10px;
        line-height: 1.5;
        transition: 250ms color;
      }

      h5 {
        color: #110a20;
        position: relative;
        padding-bottom: 25px;
        margin-bottom: 20px;
        font-size: 36px;
        font-family: 'Separat';
        font-weight: 700;

        &::after {
          content: '';
          height: 5px;
          width: 200px;
          background-color: #f64a19;
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      h6 {
        color: #f64a19;
        font-size: 18px;
        text-transform: uppercase;
        font-family: 'Work Sans';
        font-weight: 600;
      }

      p,
      li {
        color: #999;
        font-size: 16px;
        margin-bottom: 20px;
        font-family: 'Work Sans';
        font-weight: 400;
      }

      li {
        margin-bottom: 10px;
        list-style-position: inside;
        text-indent: -23px;
        padding-left: 23px;
      }

      strong {
        text-transform: uppercase;
        padding-bottom: 10px;
        font-family: 'Work Sans';
        font-weight: 600;
      }

      ul, ol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > li {
          flex: 0 1 45%;
        }
      }

      ul li {
        list-style-type: disc;
      }

      ol li {
        list-style-type: decimal;
      }

      .cta {
        margin-top: 20px;
      }
    }
  }

  &--inverted {
    .packages__item-content {
      h5 {
        &::after {
          background-color: #fff;
        }
      }

      h5,
      h6,
      p,
      li {
        color: #fff;
      }

      .cta {
        > a,
        > span {
          color: #fff;
          border-color: #fff;
        }

        &:hover {
          > a,
          > span {
            border-color: #f64a19;
          }
        }
      }
    }
  }

  &--preview {
    .packages__item {
      display: flex;
      margin: 20px 0;
      border: 0 none;
      max-height: none;
      height: auto;
      overflow: auto;
      cursor: default;
      transition: 250ms background-color;

      &::before,
      &::after {
        content: none;
      }

      &-title {
        padding: 20px 30px;
        flex: 1 1 83%;
        font-size: 42px;
        line-height: 50px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transition: 250ms border;
        font-family: 'Separat';
        font-weight: 700;
      }

      &-cta {
        flex: 1 1 18%;
        background-color: #110a20;
        border: 1px solid #fff;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 250ms background-color, 250ms border;

        a {
          font-size: 18px;
          line-height: 20px;
          padding: 20px;
          display: block;
          text-transform: uppercase;
          font-family: 'Separat';
          font-weight: 700;
        }
      }

      &:hover {
        background-color: #fff;

        .packages__item-title {
          color: #110a20;
        }

        .packages__item-cta {
          background-color: #f64a19;
          border-color: #f64a19;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    &--preview {
      display: flex;
      flex-wrap: wrap;

      .packages__item {
        flex: 1 1 50%;
        flex-direction: column;

        &-title {
          border-bottom: 0 none;
          border-right: 1px solid #fff;
          font-size: 32px;
        }

        &-cta {
          padding: 40px 20px;
        }

        &:nth-child(odd) {
          padding-right: 30px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    &__item {
      &-content {
        h5 {
          font-size: 24px;
        }

        p,
        li {
          font-size: 15px;
        }

        ul, ol {
          display: block;
        }
      }
    }

    &--preview {
      display: block;

      .packages__item {
        display: block;

        &-title {
          min-height: 200px;
        }

        &-cta {
          padding: 10px;
        }

        &:nth-child(odd) {
          padding-right: 0;
        }
      }
    }
  }
}
</style>
