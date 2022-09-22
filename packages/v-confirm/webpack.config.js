const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const webpack = require("webpack");

const builds = {
  development: {
    config: {
      mode: "development",
      devtool: "source-map",
      output: {
        filename: "v-confirm.js",
      },
      plugins: [new MiniCssExtractPlugin({ filename: "v-confirm.css" })],
    },
  },
  production: {
    config: {
      mode: "production",
      output: {
        filename: "v-confirm.min.js",
      },
      plugins: [new MiniCssExtractPlugin({ filename: "v-confirm.min.css" })],
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              compress: { drop_console: true },
              sourceMap: true,
            },
          }),
        ],
      },
    },
    env: "production",
  },
};

function genConfig(target) {
  const config = merge(base, target.config);
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(target.env || "development"),
    })
  );
  return config;
}

module.exports = Object.keys(builds).map((target) => genConfig(builds[target]));
