import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from "vite-plugin-vuetify";

const resolve = (dir = "") => path.resolve(__dirname, dir);

export default defineConfig({
  mode: "development",
  root: "dev",
  plugins: [vue(), vueJsx(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": resolve("src/"),
    },
  },
  server: {
    port: 8080,
  },
});
