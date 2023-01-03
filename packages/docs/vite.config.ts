import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const resolve = (dir = "") => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  root: "src",
  base: "/vue-confirm/",
  build: {
    outDir: resolve("docs"),
  },
  server: {
    port: 8080,
  },
});
