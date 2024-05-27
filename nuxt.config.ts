// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', ['@nuxtjs/google-fonts', {
    families: {
      'Space Grotesk': [300, 700],
      'Open Sans': [400, 700],
      'Manrope': [400, 700],
    }
  }]],
  css: ['~/assets/css/main.scss'],
  content: {
    highlight: {
      theme: 'github-light-default'
    }
  }
})
