<template>
  <section
    class="section section--shows section--half-top-padding section--white section--slant section--slant--bottom-right"
  >
    <div class="section--intro">
      <div class="intro">
        <h3 class="intro-title">Upcoming Shows</h3>
        <p
          class="intro-copy"
        >Check out our lineup and packages and book your trip to The Caverns—and remember, any day below ground is a good day!</p>
      </div>
    </div>
    <div class="section--wrapper">
      <div class="shows__legend">
        <ul>
          <li>
            <i class="icon icon--video-camera">
              <img src="~/assets/svg/videocamera.svg" alt>
            </i> = BGU/PBS Taping
          </li>
        </ul>
      </div>
      <transition-group
        v-if="shows && shows.length > 0"
        stagger="200"
        class="shows"
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
              backgroundImage: `url('${show['_embedded']['wp:featuredmedia'][0].source_url}')`
            }"
          />
          <div class="shows__item-content">
            <div class="shows__item-content__text">
              <h6 v-for="artist in show.acf.artist_name" :key="artist.id">{{ artist.name }}</h6>
              <p>{{ show.acf.date }}</p>
              <div class="cta cta--button cta--button--inverted">
                <a
                  href="https://www.etix.com/ticket/v/12718/the-caverns?cobrand=caverns"
                  target="_blank"
                >Buy Tickets</a>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="shows__more">
        <div class="cta cta--button">
          <span>See All Shows</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    shows: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.show-item {
  display: block;
  margin-right: 10px;
}

.show-item {
  display: block;
  margin-right: 10px;
}

.show-enter-active, .show-leave-active {
  transition: all 1s;
}

/* .list-leave-active below version 2.1.8 */
.show-enter, .show-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__legend {
    color: #ccc;
    padding: 0 1%;
    margin-bottom: 10px;
    font-family: 'Work Sans';
    font-weight: 400;

    .icon {
      transform: translate3d(0, 2px, 0);

      svg {
        fill: #110a20;
      }
    }
  }

  &__more {
    text-align: center;
    margin-top: 30px;

    p {
      margin-top: 20px;
      font-family: 'Work Sans';
      font-weight: 500;

      a {
        color: #f64a19;
        text-decoration: underline;
      }
    }
  }

  &__item {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(#000, 0.15);
    flex: 1 1 25%;
    max-width: 300px;
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
        background: linear-gradient(
          to bottom,
          rgba(#110a20, 0) 0%,
          rgba(#110a20, 1) 75%
        );
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
          font-weight: bold;

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
        border-right-width: 288px;
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

  @media (max-width: 1150px) {
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

  @media (max-width: 900px) {
    &__legend {
      text-align: center;
    }

    &__item {
      flex-basis: 48%;
      display: block;

      &:nth-child(n + 3) {
        display: none;
      }
    }
  }

  @media (max-width: 550px) {
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
