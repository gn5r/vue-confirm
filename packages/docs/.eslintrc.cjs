/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
  overrides: [
    {
      files: ["**/*.vue"],
      env: {
        es2023: true,
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
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
