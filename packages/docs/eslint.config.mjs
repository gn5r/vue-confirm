import config from "../../eslint.config.mjs";
import pluginVue from "eslint-plugin-vue";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";

const compat = new FlatCompat(fileURLToPath(import.meta.url));

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    files: ["**/*/vue"],
    ...pluginVue.configs["flat/essential"],
    ...compat.extends("@vue/typescript/recommended"),
    rules: {
      "vue/multi-word-component-names": "warn",
    },
  },
];
