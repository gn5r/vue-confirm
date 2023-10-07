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
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
  ],
  plugins: ["vue", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
