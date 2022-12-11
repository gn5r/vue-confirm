const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const cssLoaders = [
  "vue-style-loader",
  {
    loader: "css-loader",
    options: {
      sourceMap: true,
    },
  },
];

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  target: ["web"],
  entry: "./dev/main.ts",
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
      template: "./dev/index.html",
    }),
  ],
  devServer: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
    open: process.env.BASE_URL || "/",
    hot: true,
    static: path.resolve(process.cwd(), "dev"),
  },
};
