const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

require("dotenv").config();

module.exports = {
  mode: "production",
  target: "node",
  externals: [webpackNodeExternals()],
  entry: [path.resolve(__dirname, "src", "server.ts")],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".scss"],
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
