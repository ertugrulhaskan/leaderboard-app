// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: process.env.PORT || 4200,
  },

  app: {
    rootId: "app",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Leaderboard App",
      meta: [
        {
          name: "description",
          content:
            "Learderboard App is a web application that allows users to view and manage leaderboards for various games and competitions.",
        },
        {
          name: "robots",
          content: "noindex, nofollow", // This is for SEO purposes, not to index the site
        },
      ],
    },
    pageTransition: true,
  },

  css: ["@/assets/styles/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  fonts: {
    provider: "google",
  },
});
