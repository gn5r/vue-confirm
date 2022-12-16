module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@vue/babel-plugin-jsx", { optimize: false, enableObjectSlots: false }],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
  ignore: ["**/__tests__"],
};
