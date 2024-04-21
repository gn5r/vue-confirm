import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.js", "**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
