import config from "../../eslint.config.mjs";
import babelParser from "@babel/eslint-parser";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  ...config,
  {
    ignores: ["dist", "lib"],
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ["@babel/plugin-syntax-import-assertions"],
        },
      },
    },
  },
];
