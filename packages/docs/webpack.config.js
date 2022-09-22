const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = (dir = "") => path.resolve(__dirname, dir);

const isProcudtion = process.env.NODE_ENV === "production";

const cssLoaders = [
  isProcudtion ? MiniCssExtractPlugin.loader : "vue-style-loader",
  // "style-loader",
  {
    loader: "css-loader",
    options: {
      sourceMap: !isProcudtion,
    },
  },
];

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: isProcudtion ? "production" : "development",
  devtool: isProcudtion ? false : "inline-source-map",
  target: ["web"],
  entry: "./src/main.ts",
  output: {
    clean: true,
    path: resolve("docs"),
    filename: "js/[name].[chunkhash].js",
    publicPath: "",
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
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: "file-loader",
        options: {
          name: "assets/[name]-[contenthash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: "./src/index.html",
      minify: {
        removeComments: isProcudtion,
        collapseWhitespace: isProcudtion,
        removeAttributeQuotes: isProcudtion,
        minifyJS: isProcudtion,
        minifyCSS: isProcudtion,
        minifyURLs: isProcudtion,
      },
    }),
  ],
  devServer: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
    open: process.env.BASE_URL || "/",
    hot: true,
    static: path.resolve(process.cwd(), "docs"),
  },
};

if (isProcudtion) {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({ filename: "css/demo-[chunkhash].css" })
  );
}
