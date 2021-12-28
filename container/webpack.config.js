const HtmlWebpackPlugin = require("html-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/client.entry.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "container-[chunkhash].js",
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new AssetsPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, "build"),
    historyApiFallback: true,
    hot: true,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
