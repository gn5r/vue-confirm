// @ts-check

import config from "../../eslint.config.mjs";

export default [
  ...config,
  {
    ignores: ["dist", "lib"],
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
    },
  },
];
