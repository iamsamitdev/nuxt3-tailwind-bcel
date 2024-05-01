import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
    },
  },

  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-icon',
    [
      // Nuxt Robots Module
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '',
        Sitemap: 'https://itgenius.co.th/sitemap_news.xml'
      }
    ]
  ],

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    }
  },

})
