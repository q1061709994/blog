import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
export default hopeTheme({
  hostname: "https://gitee.com/paramhh/blog",

  author: {
    name: "huan",
    url: "https://user.qzone.qq.com/1061709994/infocenter",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://gitee.com/paramhh/blog",

  docsDir: "demo/src",
  pure: true,
  // navbar
  navbar: navbar,
  // sidebar
  sidebar: sidebar,

  footer: "主题: VuePress Theme Hope",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word"],

  blog: {
    description: "一个开发者",
    intro: "/intro.html",
    medias: {
      Baidu: " ",
      Bitbucket: " ",
      Dingding: " ",
      Discord: " ",
      Dribbble: " ",
      Email: " ",
      Evernote: " ",
      Facebook: " ",
      Flipboard: " ",
      Gitee: " ",
      GitHub: " ",
      Gitlab: " ",
      Gmail: " ",
      Instagram: " ",
      Lines: " ",
      Linkedin: " ",
      Pinterest: " ",
      Pocket: " ",
      QQ: " ",
      Qzone: " ",
      Reddit: " ",
      Rss: " ",
      Steam: " ",
      Twitter: " ",
      Wechat: " ",
      Weibo: " ",
      Whatsapp: " ",
      Youtube: " ",
      Zhihu: " ",
    },
  },
  darkmode: "toggle",
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/posts/article3.html": ["021314aa"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    copyCode: {
      showInMobile: true,
      duration: 2000,
      pure: false
    },
    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
  },
});
