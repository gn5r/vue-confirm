import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const resolve = (dir = "") => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve("src/"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/index.ts"),
      name: "v-confirm",
      fileName: (format) => `v-confirm-${format}.js`,
    },
    rollupOptions: {
      external: "vue",
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === "style.css") return "v-confirm.min.css";
          return chunkInfo.name as string;
        },
      },
    },
  },
});
