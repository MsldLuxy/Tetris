const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve("./dist"),
    filename: "script/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: "ts-loader",
      }
    ]
  },
  resolve: {
    // 检查模块包导入的时候以 以下几种文件名后缀去查找
    extensions: [".js", ".ts"]
  }
}