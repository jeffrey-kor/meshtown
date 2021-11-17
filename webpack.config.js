const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = Number(process.env.PORT) || 4000;
require("dotenv").config();

module.exports = {

  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            cacheDirectory: true,
            plugins: ["react-hot-loader/babel"]
          }
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    })
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
}