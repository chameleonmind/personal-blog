// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', ['@nuxtjs/google-fonts', {
    families: {
      'Space Grotesk': [300, 700],
      'Open Sans': [400, 700],
      'Manrope': [400, 700],
    }
  }], 'nuxt-og-image', '@nuxt/image', '@nuxtjs/seo'],
  site: {
    // production URL
    url: 'https://chameleon-mind.dev',
    name: 'Chameleon Mind',
    description: 'Chameleon Mind (Milos Milosevic) personal website and blog',
    defaultLocale: 'en',
  },
  css: ['~/assets/css/main.scss'],
  content: {
    highlight: {
      theme: 'github-light-default'
    }
  },
  app: {
    head: {
      title: 'Chameleon Mind',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt Content Blog' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
