/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "warn",
  },
};
