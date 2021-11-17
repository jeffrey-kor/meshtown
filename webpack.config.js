const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const port = Number(process.env.PORT) || 4000;
require("dotenv").config();

module.exports = {

  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: "commonjs" }],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            cacheDirectory: true,
            plugins: [
              "react-hot-loader/babel",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-transform-runtime",
              "@babel/plugin-transform-typescript"
            ]
          }
        }],
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

  resolve: {
    modules: [path.join(__dirname), "src", "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html"
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],

  devtool: "source-map",
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
}