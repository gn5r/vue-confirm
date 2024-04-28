import config from "../../eslint.config.mjs";
import pluginVue from "eslint-plugin-vue";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

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
