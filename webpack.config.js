const path = require("path");
//const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    filename: "files/landing-cyber-[name].js",
    chunkFilename: "files/landing-cyber-[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use:{
          loader: "url-loader",
          options: {
            limit: 1000000,
            name: "arquivos/cyber-[name].[ext]"
          }
        }
      },
      {
        test: /\.(mp4)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            mimetype: "video/mp4",
            name: "video/cyber-[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "cyber-[name]-styles.css",
      chunkFilename: "cyber-[id]-styles.css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src/html/index.html"),
      title: "Cyber Lunes Jumbo"
    })
  ]
};
