import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify from "vite-plugin-vuetify";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-vue-markdown";

import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItPrism from "markdown-it-prism";

const resolve = (dir = "") => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/] }),
    Pages({
      extensions: ["vue", "md"],
    }),
    Vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/settings.scss" },
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(MarkdownItAnchor);
        md.use(MarkdownItPrism);
        const fence = md.renderer.rules.fence;
        md.renderer.rules.fence = function (tokens, idx, options, env, self) {
          const handler = fence || self.renderToken;
          return `<markup>${handler(tokens, idx, options, env, self)}</markup>`;
        };
        md.renderer.rules.code_inline = function (tokens, idx) {
          const token = tokens[idx];
          return `<code class="v-code">${md.utils.escapeHtml(
            token.content
          )}</code>`;
        };
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src/"),
    },
  },
  base: "/vue-confirm/",
  server: {
    port: 8080,
  },
});
