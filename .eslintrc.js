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
    ecmaVersion: "latest",
    sourceType: "script",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        es2023: true,
        browser: true,
        node: true,
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
      },
    },
  ],
};
