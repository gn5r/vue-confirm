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
    // ja: {
    //   label: "日本語",
    //   lang: "ja",
    //   link: "/ja/",
    //   themeConfig: {
    //     nav: nav("ja"),
    //     sidebar: {
    //       "/ja/guide/": { base: "/ja/guide/", items: sidebarGuide() },
    //     },
    //   },
    // },
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
      noExternal: ["vuetify"],
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
    },
  },
});

function nav(locale?: string) {
  const nav: any[] = [
    { text: "Guide", link: "/guide/getting-started" },
    { text: "Reference", link: "/guide/component-api" },
  ];
  if (locale) {
    nav.forEach((n) => {
      n.link = `/${locale}/${n.link}`;
    });
  }
  nav.push({
    text: pkg.version,
    items: [
      {
        text: "Releases",
        link: "https://github.com/gn5r/vue-confirm/releases",
      },
    ],
  });
  return nav;
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
