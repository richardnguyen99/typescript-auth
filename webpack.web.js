const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config();

module.exports = {
  mode: "production",
  target: "web",
  entry: [path.resolve(__dirname, "src", "public", "ts", "index.ts"), path.resolve(__dirname, "src", "public", "scss", "main.scss")],
  output: {
    filename: "js/index.js",
    chunkFilename: "js/[name].chunk.js",
    path: path.resolve(__dirname, "dist", "public"),
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
      {
        test: /\.(sa|sc|c)ss$/,
        include: /scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: 'css/[id].css',
  })]
};
