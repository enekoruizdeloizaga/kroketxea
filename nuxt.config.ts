// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-aos",
    "@nuxtjs/i18n"
  ],
  i18n: {
    locales: [
      {
        code: 'eu',
        file: 'eu.json'
      },
      {
        code: 'es',
        file: 'es.json'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'eu'
  }
})