// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', ['@nuxtjs/google-fonts', {
    families: {
      'Space Grotesk': [300, 700],
      'Open Sans': [400, 700],
      'Manrope': [400, 700],
      'Major Mono Display': [400],
    },
    provider: 'google',
  }], 'nuxt-og-image', '@nuxt/image', '@nuxtjs/seo'],
  site: {
    // production URL
    url: 'https://chameleonmind.dev',
    name: 'Chameleon Mind',
    description: 'Chameleon Mind (Milos Milosevic) personal website and blog',
    defaultLocale: 'en',
  },
  css: ['~/assets/css/main.scss'],
  content: {
    highlight: {
      theme: 'github-dark-default'
    }
  },
  app: {
    head: {
      title: 'Chameleon Mind',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt Content Blog' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ]
    },
    pageTransition: {
      name: 'blur',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'blur',
      mode: 'out-in',
    }
  }
})
