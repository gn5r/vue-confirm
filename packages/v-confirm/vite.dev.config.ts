import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  mode: "development",
  root: "dev",
  plugins: [vue()],
  server: {
    port: 8080,
  },
});
