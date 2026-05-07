// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/comarca-quequen/' // Replace with your repo name if different
  },
  nitro: {
    preset: 'github-pages'
  }
})
