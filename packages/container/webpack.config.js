const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        mfe1: "mfe1@http://localhost:8082/remoteEntry.js",
        mfe2: "mfe2@http://localhost:8083/remoteEntry.js",
        mfe3: "mfe3@http://localhost:8084/remoteEntry.js"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
