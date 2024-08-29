import config from "../../eslint.config.mjs";

/**
 * @type {import("eslint").Linter.Config}
 */
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
