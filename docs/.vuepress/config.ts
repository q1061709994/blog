import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Huan",
  description: "a blog project",

  base: "/blog/",

  head: [
    [
      "link", 
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/blog/favicon.ico",
      },
    ],
  ],

  plugins: [
    searchPlugin({
      // ...

      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  theme,
});
