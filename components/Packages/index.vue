<template>
  <section
    class="section section--packages section--slant section--slant--top-left section--slant--bottom-left"
  >
    <div class="section--intro">
      <div class="intro">
        <h3 class="intro-title">Featured Packages</h3>
        <p class="intro-copy"/>
      </div>
    </div>
    <div class="section--wrapper">
      <div class="packages--wrapper">
        <div v-if="packages && packages.length > 0" class="packages">
          <div
            v-for="(pkg, i) in packages"
            :key="pkg.id"
            :class="{ 'packages__item--active': activeIndex === i }"
            class="packages__item"
            @:click="toggleActive(i)"
          >
            <div class="packages__item-content">
              <div class="packages__item-content__title">
                <h5 v-html="pkg.title.rendered">{{ pkg.title.rendered }}</h5>
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
    </div>
  </section>
</template>

<script>
export default {
  props: {
    packages: {
      type: Array,
      default: null
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
  display: flex;
  flex-wrap: wrap;

  &__item {
    background-color: transparent;
    border: 1px solid #fff;
    flex-basis: 48%;
    max-height: 475px;
    height: 475px;
    overflow: hidden;
    position: relative;
    margin: 15px 1%;
    cursor: pointer;
    transition: 250ms background-color, 250ms border;

    &-content {
      max-height: 475px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      padding: 20px;

      &__title {
        h5 {
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.2;
          transition: 250ms color;
          font-size: 36px;
          font-family: 'Separat';
          font-weight: 700;
        }
      }

      &__text {
        >>> {
          h6, p, li {
            color: #fff;
            margin-bottom: 10px;
            line-height: 1.2;
            transition: 250ms color;
          }

          h6 {
            font-size: 18px;
            text-transform: uppercase;
            font-family: 'Work Sans';
            font-weight: 600;
          }

          p, li {
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

          ul li {
            list-style-type: disc;
          }

          ol li {
            list-style-type: decimal;
          }
        }
      }

      .cta {
        margin-top: 20px;

        > a, > span {
          color: #fff;
          border-color: #fff;
        }
      }
    }

    &::after {
      content: '';
      height: 475px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        to bottom,
        rgba(#110a20, 0) 0%,
        rgba(#110a20, 1) 100%
      );
    }

    &--active {
      &::after {
        content: none;
        background: linear-gradient(
          to bottom,
          rgba(#fff, 0) 0%,
          rgba(#fff, 1) 100%
        );
      }
    }

    &:hover {
      &::after {
        content: none;
        background: linear-gradient(
          to bottom,
          rgba(#fff, 0) 0%,
          rgba(#fff, 0) 50%
        );
      }
    }

    &--active, &:hover {
      background-color: #fff;
      border-color: #fff;

      .packages__item-content {
        &__title {
          h5 {
            color: #110a20;
          }
        }

        &__text {
          >>> {
            h6 {
              color: #f64a19;
            }

            p, li {
              color: #999;
            }
          }
        }

        .cta {
          > a, > span {
            color: #f64a19;
            border-color: #f64a19;
          }

          &:hover {
            > a, > span {
              color: #fff;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    display: block;

    &__item {
      flex-basis: 98%;
      width: 98%;
      height: auto;
      max-height: initial;
      background-color: #fff;
      border-color: #fff;

      &::after {
        content: none;
      }

      .packages__item-content {
        max-height: initial;

        &__title {
          h5 {
            color: #110a20;
          }
        }

        &__text {
          >>> {
            h6 {
              color: #f64a19;
            }

            p, li {
              color: #999;
            }
          }
        }

        .cta {
          > a, > span {
            color: #f64a19;
            border-color: #f64a19;
          }

          &:hover {
            > a, > span {
              color: #fff;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    &__item {
      &-content {
        &__title {
          h5 {
            font-size: 24px;
          }
        }

        &__text {
          >>> {
            p, li {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
