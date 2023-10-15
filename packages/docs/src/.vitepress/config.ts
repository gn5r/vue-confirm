import { defineConfig } from "vitepress";
import path from "node:path";
import pkg from "../../package.json";

const base = process.env.NODE_ENV === "production" ? "/vue-confirm/" : "/";
console.debug("base:", base);

const resolve = (dir = "") => path.resolve(__dirname, dir);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: base,
  outDir: `${process.cwd()}/dist`,
  title: "Vue Confirm",
  description: "A confirm component for Vue.js",
  head: [
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Vue Confirm" }],
    [
      "meta",
      { name: "og:description", content: "A confirm component for Vue.js" },
    ],
    [
      "meta",
      { name: "og:url", content: "https://gn5r.github.io/vue-confirm/" },
    ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: nav(),
        sidebar: {
          "/guide/": { base: "/guide/", items: sidebarGuide() },
        },
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      link: "/ja/",
      themeConfig: {
        nav: navJa(),
        sidebar: {
          "/ja/guide/": { base: "/ja/guide/", items: sidebarGuideJa() },
        },
      },
    },
  },
  // global theme config
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    i18nRouting: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/gn5r/vue-confirm" },
    ],
    footer: {
      message: "",
      copyright: "Development by © shangyuan.tuolang",
    },
  },
  // vite config
  vite: {
    resolve: {
      alias: {
        "@": resolve("./"),
        "@theme": resolve("./theme/"),
      },
    },
    ssr: {
      noExternal: ["vuetify", "vue-i18n"],
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
});

function nav() {
  return [
    { text: "Guide", link: "/guide/getting-started" },
    { text: "Reference", link: "/guide/component-api" },
    {
      text: pkg.version,
      items: [
        {
          text: "Releases",
          link: "https://github.com/gn5r/vue-confirm/releases",
        },
      ],
    },
  ];
}

function navJa() {
  return [
    { text: "ガイド", link: "/ja/guide/getting-started" },
    { text: "リファレンス", link: "/ja/guide/component-api" },
    {
      text: pkg.version,
      items: [
        {
          text: "Releases",
          link: "https://github.com/gn5r/vue-confirm/releases",
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "Getting Started", link: "getting-started" },
        { text: "Playground", link: "playground" },
      ],
    },
    {
      text: "Reference",
      collapsed: false,
      items: [
        {
          text: "Component API",
          link: "component-api",
          items: [
            { text: "Props", link: "component-api#props" },
            { text: "Events", link: "component-api#events" },
            { text: "Slots", link: "component-api#slots" },
          ],
        },
        {
          text: "SASS Variables",
          link: "sass-variables",
          items: [
            { text: "theme", link: "sass-variables#theme" },
            { text: "v-confirm", link: "sass-variables#v-confirm" },
            { text: "usage", link: "sass-variables#usage" },
          ],
        },
      ],
    },
  ];
}

function sidebarGuideJa() {
  return [
    {
      text: "紹介",
      collapsed: false,
      items: [
        { text: "始めましょう", link: "getting-started" },
        { text: "プレイグラウンド", link: "playground" },
      ],
    },
    {
      text: "リファレンス",
      collapsed: false,
      items: [
        {
          text: "コンポーネントAPI",
          link: "component-api",
          items: [
            { text: "Props", link: "component-api#props" },
            { text: "イベント", link: "component-api#events" },
            { text: "スロット", link: "component-api#slots" },
          ],
        },
        {
          text: "SASS変数",
          link: "sass-variables",
          items: [
            { text: "テーマ", link: "sass-variables#theme" },
            { text: "v-confirm", link: "sass-variables#v-confirm" },
            { text: "使い方", link: "sass-variables#usage" },
          ],
        },
      ],
    },
  ];
}
