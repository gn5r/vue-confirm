import config from "../../eslint.config.mjs";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
