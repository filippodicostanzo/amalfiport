export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portodiamalfi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@100;200;300;400;500;600;700;800;900&display=swap"
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['animate.css/animate.min.css', '@assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/vue-awesome-swiper',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-js-modal.js',
      mode: 'client'
    },
    {
      src: '@/plugins/simple-validator.js',
      ssr: true
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'nuxt-cookie-control',
    ['nuxt-gmaps', {key: process.env.GOOGLE_MAPS_API_KEY}],
    ['vue-scrollto/nuxt', {duration: 1000}],
    ['@nuxtjs/recaptcha', {
      hideBadge: true,
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      version: 3,  // Site key for requests
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  i18n: {
    lazy: true,
    locales: [
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },

    ],
    langDir: 'lang/',
    defaultLocale: 'en',
    parsePages: false,   // Disable babel parsing
    pages: {

      about: {
        it: '/chi-siamo',
        en: '/about'
      },

      history: {
        it: '/storia', // -> accessible at /about-us (no prefix since it's the default locale)
        en: '/history', // -> accessible at /fr/a-propos
      },
      excursions: {
        it: '/escursioni', // -> accessible at /about-us (no prefix since it's the default locale)
        en: '/excursions', // -> accessible at /fr/a-propos
      },

      services: {
        it: '/servizi',
        en: '/services',
      },
      location: {
        it: '/location',
        en: '/location',
      },
      contacts: {
        it: '/contatti',
        en: '/contacts',
      }
    },
    vueI18nLoader: true,
    loadLanguagesAsync: true,
    seo: true
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    }
  },

  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else

        //if multilanguage
        description: {
          en: 'Used for cookie control.'
        },
        //else

        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //if multilanguage
        description: {
          en: 'Google GTM is ...'
        },
        //else

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () => {
        }
      }
    ]
  },

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: process.env.RECAPTCHA_SITE_KEY // for example
    },
    siteDomain: process.env.SITE_DOMANIN || '',
    siteProperty: process.env.SITE_PROPERTY || '',
    siteAddress: process.env.SITE_ADDRESS || '',

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
