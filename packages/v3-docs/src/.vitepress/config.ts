import { defineConfig } from "vitepress";
import pkg from "../../package.json";

const base = process.env.NODE_ENV === "production" ? "/vue-confirm/" : "/";
console.debug("base:", base);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: base,
  outDir: `${process.cwd()}/dist`,
  title: "Vue Confirm",
  description: "A confirm component demo site",
  // vite config
  vite: {
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
  // i18n
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    // ja: {
    //   label: "日本語",
    //   lang: "ja",
    //   link: "/ja/",
    //   themeConfig: {
    //     aside: false,
    //     i18nRouting: true,
    //     nav: nav("ja"),
    //     sidebar: {
    //       "/ja/guide/": { base: "/ja/guide/", items: sidebarGuide() },
    //     },
    //   },
    // },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    i18nRouting: true,
    nav: nav(),
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/gn5r/vue-confirm" },
    ],
    footer: {
      message: "",
      copyright: "Development by © shangyuan.tuolang",
    },
  },
});

function nav(locale?: string) {
  const nav: any[] = [
    { text: "Guide", link: "/guide/getting-started" },
    { text: "Reference", link: "/guide/reference" },
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
          link: "reference",
          items: [
            { text: "Props", link: "reference#props" },
            { text: "Events", link: "reference#events" },
            { text: "Slots", link: "reference#slots" },
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
