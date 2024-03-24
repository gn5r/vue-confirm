import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      transformMode: {
        web: [/.[tj]sx$/],
      },
      include: ["**/__tests__/**/*.{test,spec}.{ts,tsx}"],
    },
  })
);
