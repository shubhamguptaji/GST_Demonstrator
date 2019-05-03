const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css/,
        use: {
          loader: "css-loader"
        }
      }
    ]
  },
  mode: "development",
  plugins: [
    new htmlWebPackPlugin({
      template: "./public/index.html"
    })
  ]
};
