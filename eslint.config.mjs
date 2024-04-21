import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "script",
    },
    ...eslint.configs.recommended,
  },
];
