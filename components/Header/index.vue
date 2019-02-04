<template>
  <header class="header">
    <div class="section--wrapper">
      <div class="header__content">
        <div class="header__logo">
          <nuxt-link to="/">
            <img src="~/assets/svg/logo-nav.svg" alt="">
          </nuxt-link>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-list__item">
              <nuxt-link to="/about" class="header__nav-list__item-link">
                About
              </nuxt-link>
            </li>
            <li class="header__nav-list__item">
              <nuxt-link to="/#shows" class="header__nav-list__item-link header__nav-list__item-link--anchor">
                Shows
              </nuxt-link>
            </li>
            <li class="header__nav-list__item">
              <nuxt-link to="/packages" class="header__nav-list__item-link">
                Packages
              </nuxt-link>
            </li>
            <li class="header__nav-list__item">
              <nuxt-link to="/questions" class="header__nav-list__item-link">
                Questions
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header__nav-trigger">
          <i />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    // initialise
    if (process.client) {
      const Headroom = require('headroom.js')

      const header = document.querySelector('.header')
      const navTrigger = header.querySelector('.header__nav-trigger')

      // construct an instance of Headroom, passing the element
      const headroom = new Headroom(header)

      navTrigger.addEventListener('click', () => {
        header.classList.toggle('header--open')
      })

      headroom.init()
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  background-color: #110a20;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  z-index: 3;

  .section--wrapper {
    height: 100%;
  }

  &__content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 272px;
    width: 100%;

    a {
      display: block;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__nav {
    &-list {
      text-align: right;

      &__item {
        display: inline-block;

        &-link {
          padding: 15px;
          text-transform: uppercase;
          color: #fff;
          font-size: 24px;
          display: block;
          font-family: 'Separat';
          font-weight: 700;

          &.nuxt-link-exact-active {
            border-bottom: 3px solid #f64a19;
          }

          &--anchor {
            .nuxt-link-exact-active {
              border-bottom: 0 none;
            }
          }
        }
      }
    }

    &-trigger {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      height: 60px;
      width: 70px;
      padding: 10px 15px;
      cursor: pointer;

      > i {
        height: 3px;
        width: 39px;
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
      }

      &::before,
      &::after {
        content: '';
        width: 39px;
        height: 3px;
        background-color: #fff;
        display: block;
        position: absolute;
        right: 16px;
      }

      &::before {
        top: 17px;
      }

      &::after {
        bottom: 17px;
      }
    }
  }

  &.headroom {
    transition: transform .25s ease-in-out;
    will-change: transform;

    &--pinned {
      transform: translateY(0);
    }

    &--unpinned {
      transform: translateY(-100%);
    }
  }

  @media (max-width: 1023px) {
    height: 60px;

    &__logo {
      max-width: 200px;
    }

    &__nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #110a20;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
      display: none;

      &-list {
        text-align: left;
        display: flex;
        flex-direction: column;

        &__item {
          &-link {
            font-size: 8vw;
          }
        }
      }

      &-trigger {
        display: block;
      }
    }

    &--open {
      .header__nav {
        display: flex;

        &-trigger {
          > i {
            display: none;
          }

          &::before,
          &::after {
            top: 50%;
          }

          &::before {
            transform: rotate(45deg);
          }

          &::after {
            transform: rotate(-45deg);
            bottom: auto;
          }
        }
      }
    }
  }
}
</style>
