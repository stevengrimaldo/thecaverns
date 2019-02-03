<template>
  <footer class="footer">
    <div class="section--wrapper">
      <div class="footer__content">
        <div class="footer--left">&copy; {{ currentYear }} The Caverns</div>
        <div class="footer--right">
          <div class="social--wrapper">
            <ul class="social">
              <li v-for="item in social" :key="item.id" :class="`social__link ${item.class}`">
                <template v-if="item.url">
                  <a :href="item.url" target="_blank">
                    <i class="social__link-icon">
                      <img :src="item.icon" alt>
                    </i>
                  </a>
                </template>
                <template v-else>
                  <span>
                    <i class="social__link-icon">
                      <img :src="item.icon" alt>
                    </i>
                  </span>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { social } from './data'

export default {
  data() {
    return {
      arrowUp: null,
      currentYear: new Date().getFullYear(),
      social
    }
  },
  mounted() {
    this.arrowUp = document.querySelector('.arrow')
    this.arrowUp.addEventListener('click', this.$scrollTop)
  },
  beforeDestroy() {
    this.arrowUp.removeEventListener('click', this.$scrollTop)
  }
}
</script>

<style lang="stylus" scoped>
.footer {
  background-color: #fff;
  position: relative;
  z-index: 2;

  &__content {
    border-top: 1px solid #ccc;
    color: #ccc;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Separat';
    font-weight: 700;
  }

  @media (max-width: 767px) {
    &__content {
      font-size: 12px;
    }
  }
}
</style>
