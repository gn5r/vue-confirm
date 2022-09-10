const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const resolve = (dir = "") => path.resolve(__dirname, dir);

const isProcudtion = process.env.NODE_ENV === "production";

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: isProcudtion ? "production" : "development",
  context: __dirname,
  devtool: isProcudtion ? false : "source-map",
  entry: {
    "v-confirm": "./src/index.ts",
    "v-confirm.min": "./src/index.ts",
  },
  output: {
    clean: true,
    path: resolve("dist"),
    filename: "[name].js",
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
      "@": resolve("./src"),
    },
    extensions: [".js", ".ts", "vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: "all",
        terserOptions: { compress: { drop_console: true } },
      }),
      new CssMinimizerPlugin({
        test: /\.min.css$/,
      }),
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
