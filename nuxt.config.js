import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  server: {
    port: 3200, // default: 3000
  },

  loading: {
    color: 'blue',
    height: '5px',
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Azimoff.me',
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/aos.client', '@/plugins/vue-lazyload'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        seo: true,
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,
        },
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            domain: 'localhost:50613',
            logo: '/us.svg',
          },
          {
            code: 'ru',
            name: 'Русский',
            iso: 'ru-RU',
            domain: 'localhost:50613/ru',
            logo: '/ru.svg',
          },
          {
            code: 'tj',
            name: 'Точики',
            iso: 'tg-TJ',
            domain: 'localhost:50613/tj',
            logo: '/tj.svg',
          },
          {
            code: 'de',
            name: 'Точики',
            iso: 'de-DE',
            domain: 'localhost:50613/de',
            logo: '/de.svg',
          },
        ],
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
