const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config();

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  target: "node",
  mode: isDev ? "development" : "production",
  devtool: "source-map",
  externals: [webpackNodeExternals()],
  entry: [path.resolve(__dirname, "src", "server.ts")],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
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
