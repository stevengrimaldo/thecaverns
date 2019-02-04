<template>
  <transition-group
    v-if="shows && shows.length > 0"
    stagger="200"
    class="shows"
    :class="{ 'shows--preview': preview }"
    name="show"
    tag="div"
  >
    <div
      v-for="(show, index) in shows"
      :key="'show' + index"
      ref="shows"
      class="shows__item show-item"
      :style="{ 'transition-delay': index * 50 + 'ms' }"
    >
      <div
        class="shows__item-image"
        :style="{
          backgroundImage: `url('${show.acf.show_image}')`
        }"
      />
      <div class="shows__item-content">
        <div class="shows__item-content__text">
          <h6 v-for="artist in show.acf.artist_name" :key="artist.id">
            {{ artist.name }}
          </h6>
          <p>{{ show.acf.date }}</p>
          <div class="cta cta--button cta--button--inverted">
            <a
              href="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
              target="_blank"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    shows: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(#000, 0.15);
    flex: 1 1 23%;
    max-width: 307px;
    margin: 15px 1%;
    display: block;
    padding: 1px;
    overflow: hidden;
    position: relative;
    min-height: 400px;

    &-icon {
      display: block;
      position: absolute;
      z-index: 10;
      top: 20px;
      left: 20px;

      svg {
        fill: #fff;
        box-shadow: 0 0 30px 0 rgba(#000, 0.8);
      }
    }

    &-image {
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;

      &::before {
        content: '';
        background-color: #110a20;
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        z-index: 5;
      }

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: 500ms transform, 500ms height;
        background: linear-gradient(to bottom, rgba(#110a20, 0) 0%, rgba(#110a20, 1) 75%);
      }
    }

    &-content {
      position: absolute;
      background-color: #fff;
      border-color: #fff;
      margin-top: 60px;
      width: calc(100% - 2px);
      top: calc(100% - 60px);
      padding: 20px;
      transform: translate3d(0, calc(-100% + 70px), 0);
      transition: 300ms transform;

      &__text {
        position: relative;
        z-index: 1;

        h6 {
          font-size: 15px;
          text-transform: uppercase;
          color: #f64a19;
          margin-bottom: 10px;
          position: relative;
          font-family: 'Separat';
          font-weight: 700;

          &::before {
            content: '-';
            color: #ccc;
            display: inline-block;
            margin-right: 5px;
          }
        }

        p {
          display: inline-block;
          font-size: 12px;
          color: #999;
          line-height: 1.2;
          border-top: 1px solid #ccc;
          padding-top: 10px;
          padding-right: 15px;
          font-family: 'Work Sans';
          font-weight: 500;
        }

        .cta {
          margin-top: 20px;
          opacity: 0;
          transform: translate3d(0, 20px, 0);
          transition: 300ms opacity 100ms, 300ms transform 100ms;
        }
      }

      &::before {
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        right: 0;
        content: '';
        border-bottom-color: inherit;
        border-bottom-style: solid;
        border-bottom-width: 25px;
        border-right-width: 307px;
        border-right-style: solid;
        border-right-color: transparent;
        top: -25px;
        z-index: 0;
      }

      &::after {
        content: '';
        background-color: #110a20;
        position: absolute;
        top: -25px;
        height: 25px;
        right: -1px;
        width: 1px;
      }
    }

    &:hover {
      .shows__item {
        &-image {
          &::after {
            height: calc(100% + 50px);
            transform: translate3d(0, -50px, 0);
          }
        }

        &-content {
          transform: translate3d(0, -100%, 0);

          .shows__item-content__text {
            .cta {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
        }
      }
    }
  }

  &--preview {
    .shows__item {
      &:nth-child(n + 9) {
        display: none;
        transform: translate3d(0, 30px, 0);
        opacity: 0;
      }
    }
  }

  @media (max-width: 1149px) {
    &__item {
      flex-basis: 31%;
      display: block;

      &:nth-child(n + 4) {
        display: none;
      }
    }
  }

  @media (max-width: 1023px) {
    &__item {
      &-image {
        &::after {
          height: calc(100% + 50px);
          transform: translate3d(0, -50px, 0);
        }
      }
      &-content {
        transform: translate3d(0, -100%, 0);

        .shows__item-content__text {
          .cta {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  @media (max-width: 959px) {
    &__item {
      flex-basis: 48%;
      display: block;

      &:nth-child(n + 3) {
        display: none;
      }
    }
  }

  @media (max-width: 479px) {
    &__item {
      flex-basis: 98%;
      display: block;

      &:nth-child(n + 2) {
        display: none;
      }
    }
  }
}
</style>
