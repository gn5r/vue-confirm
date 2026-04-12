// @ts-check

import config from "../../eslint.config.mjs";

export default [
  ...config,
  {
    ignores: [".vitepress/cache"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
