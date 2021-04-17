const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

require("dotenv").config();

const isDev = process.env.NODE_ENV === "development"

module.exports = {
  target: "node",
  mode: isDev ? "development": "production",
  devtool: "source-map",
  externals: [webpackNodeExternals()],
  entry: [path.resolve(__dirname, "src", "server.ts")],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: "_",
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
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
    ],
  },
};
