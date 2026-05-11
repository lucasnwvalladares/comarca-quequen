// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/content'],
  app: {
    baseURL: '/comarca-quequen/',
    head: {
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/png', href: '/comarca-quequen/images/logo-comarca.png' },
        { rel: 'apple-touch-icon', href: '/comarca-quequen/images/logo-comarca.png' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/',
        '/pueblos',
        '/pueblos/micaela-cascallares',
        '/pueblos/indio-rico',
        '/pueblos/balneario-marisol',
        '/atracciones',
        '/atracciones/desembocadura-pillahuinco',
        '/atracciones/cascada-majidic',
        '/atracciones/cascada-reta',
        '/atracciones/cascada-la-escondida',
        '/atracciones/cascada-cifuentes',
        '/atracciones/cascada-mulpunleufu',
        '/atracciones/cascada-v',
        '/atracciones/cascada-cueva-del-tigre',
        '/atracciones/la-boca',
        '/atracciones/puente-ruta-85',
        '/atracciones/puente-vanoli',
        '/atracciones/puente-cascallares',
        '/atracciones/molino-de-las-rosas',
        '/atracciones/puente-ruta-nacional-3',
        '/atracciones/puente-nuevo',
        '/atracciones/puente-viejo',
        '/atracciones/cueva-del-tigre',
        '/atracciones/fortin-marco-paz',
        '/atracciones/fortin-buenos-aires',
        '/atracciones/fortin-argentino',
        '/naturaleza',
        '/leyendas'
      ]
    }
  },
  googleFonts: {
    families: {
      'Playfair+Display': [400, 700],
      'Inter': [400, 500, 700]
    },
    display: 'swap'
  }
})
