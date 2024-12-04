import defaultTheme from "tailwindcss/defaultTheme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: { primary: "var(--primary-color)" },
          fontFamily: {
            sans: ["Clone Udemy Text", ...defaultTheme.fontFamily.sans],
          },
        },
      },
    },
  },
});
