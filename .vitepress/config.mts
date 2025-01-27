import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fatkid at Heart",
  description: "A Food Recipe Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Meals", link: "/recipes/meals" },
      { text: "Drinks", link: "/recipes/drinks" },
    ],

    sidebar: [
      {
        text: "Recipes",
        items: [{ text: "Meals", link: "/recipes/meals/" }],
      },
    ],

    search: {
      provider: "local",
    },
  },
});
