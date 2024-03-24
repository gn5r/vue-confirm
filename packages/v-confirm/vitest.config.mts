import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config.mjs";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      include: ["**/__tests__/**/*.{test,spec}.{ts,tsx}"],
    },
  })
);
