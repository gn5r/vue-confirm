require("dotenv").config();

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = (dir = "") => path.resolve(__dirname, dir);

const isProcudtion = process.env.NODE_ENV === "production";

const cssLoaders = [
  isProcudtion ? MiniCssExtractPlugin.loader : "style-loader",
  "css-loader",
  "postcss-loader",
];

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: isProcudtion ? "production" : "development",
  context: __dirname,
  entry: {
    "v-confirm": "./src/index.ts",
  },
  output: {
    path: resolve("dist"),
    library: "VConfirm",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue",
    },
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".ts", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          ...cssLoaders,
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...cssLoaders,
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: false,
              },
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  },
};
