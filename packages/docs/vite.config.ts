import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const resolve = (dir = "") => path.resolve(__dirname, dir);

export default defineConfig(({ command, mode }) => ({
  plugins: [vue(), vuetify({ autoImport: true, styles: command === "serve" || mode === "development" ? "sass" : true })],
  resolve: {
    alias: {
      "@": resolve("src/"),
    },
  },
  root: "src",
  base: "/vue-confirm/",
  build: {
    outDir: resolve("docs"),
  },
  server: {
    port: 8080,
  },
}));