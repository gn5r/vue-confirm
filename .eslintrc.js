/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        es2021: true,
        browser: true,
        node: true,
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      rules: {},
    },
  ],
};
