import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const resolve = (dir = "") => path.resolve(__dirname, dir);

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  mode: isProd ? "production" : "development",
  root: "src",
  plugins: [vue()],
  build: {
    outDir: resolve("docs"),
  },
  server: {
    port: 8080,
  },
});
