// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ssr:false,
  app: {
    baseURL: '/product-list-with-cart/'  // Replace with your repo name
  }
})