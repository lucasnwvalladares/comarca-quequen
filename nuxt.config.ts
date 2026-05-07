// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  app: {
    baseURL: '/comarca-quequen/'
  },
  nitro: {
    preset: 'github-pages'
  },
  googleFonts: {
    families: {
      'Playfair+Display': [400, 700],
      'Inter': [400, 500, 700]
    },
    display: 'swap'
  }
})
