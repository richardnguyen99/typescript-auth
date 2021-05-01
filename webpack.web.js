const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  target: "web",
  entry: {
    index: path.resolve(__dirname, "src", "public", "ts", "index.ts"),
    signin: path.resolve(__dirname, "src", "public", "ts", "signin.ts"),
    main: path.resolve(__dirname, "src", "public", "scss", "main.scss")
  },
  output: {
    filename: isProd ? "js/[name].[fullhash].js" : "js/[name].js" ,
    chunkFilename: "js/[name].chunk.js",
    path: path.resolve(__dirname, "dist", "public"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".scss"],
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: /scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ejs$/i,
        use: {
          loader: "raw-loader"
        }
      }
    ],
  },
  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: "views/home.ejs",
      template: "views/home.ejs",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "views/signin.ejs",
      template: "views/signin.ejs",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      chunks: ["index", "signin"]
    })
  ]
};
