// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"
export default defineNuxtConfig({
  app: {
    head: {
      title: "Unseen Riches",
      meta: [
        {
          name: "description",
          content: "Delve into the unknown",
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
