export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  features: {
    inlineStyles: false,
  },

  future: {
    compatibilityVersion: 4
  },

  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/main.css',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  fonts: {

  }
})