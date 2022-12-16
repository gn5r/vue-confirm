import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const resolve = (dir = "") => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue()],
  root: "src",
  base: "/vue-confirm/",
  build: {
    outDir: resolve("docs"),
  },
  server: {
    port: 8080,
  },
});
