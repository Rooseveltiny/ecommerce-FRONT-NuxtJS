export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Всё для кровли | Интернет-магазин',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Профнастил, металлочерепица, металлический сайдинг, грядки, евроштакетник в интернет-магазине Всё для кровли. улица Краснодонцев 5.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  loading: {
    color: '#fc0'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~plugins/vue-notifications', ssr: false},
    '~plugins/hooper',
    '~plugins/api_ecommerce_vdk',
    {src: '~plugins/vue_typer', mode: 'client'},
    '~plugins/gl-components'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxyHeader: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
    // port: 3000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  }
}


