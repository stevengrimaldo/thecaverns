const pkg = require('./package')

module.exports = {
  mode: 'universal',

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      if (to.hash) {
        const findEl = (hash, x) => {
          return (
            document.querySelector(hash) ||
            new Promise((resolve, reject) => {
              if (x > 50) {
                return resolve()
              }
              setTimeout(() => {
                resolve(findEl(hash, ++x || 1))
              }, 100)
            })
          )
        }

        const el = await findEl(to.hash)

        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/ctas.styl',
    '~/assets/styles/fonts.styl',
    '~/assets/styles/reset.styl',
    '~/assets/styles/layout.styl',
    '~/assets/styles/icons.styl',
    '~/assets/styles/callout.styl',
    '~/assets/styles/social.styl',
    '~/assets/styles/slick.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/addPerspective.js',
      ssr: false
    },
    {
      src: '~/plugins/calcPosition.js',
      ssr: false
    },
    {
      src: '~/plugins/extractSvgs.js',
      ssr: false
    },
    {
      src: '~/plugins/scrollTop.js',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Server Middleware
  */
  serverMiddleware: ['~/api/wordpress.js'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
