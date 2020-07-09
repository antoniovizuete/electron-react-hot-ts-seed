const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(
  {
    entry: [
      "react-hot-loader/patch",

      "webpack-dev-server/client?http://localhost:3000",
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      "webpack/hot/only-dev-server",
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
    ],

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new MiniCSSExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],

    devtool: "inline-source-map",

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loaders: ["react-hot-loader/webpack", "ts-loader"],
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader,
              options: {
                hmr: true,
              },
            },
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },

    devServer: {
      host: "localhost",
      port: 3000,

      historyApiFallback: true,
      // respond to 404s with index.html

      hot: true,
      // enable HMR on the server
    },
  },
  base.renderer
);
