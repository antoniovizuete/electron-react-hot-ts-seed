const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

let prodMain = merge(
  {
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.tsx?$/,
          loaders: ["ts-loader"],
        },
      ],
    },
  },
  base.main
);

let prodRenderer = merge(
  {
    module: {
      plugins: [
        new MiniCSSExtractPlugin({
          filename: "[name].[hash].css",
          chunkFilename: "[id].[hash].css",
        }),
      ],
      rules: [
        {
          test: /\.tsx?$/,
          loaders: ["ts-loader"],
        },
        {
          test: /\.s?css$/,
          use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  },
  base.renderer
);

module.exports = [prodMain, prodRenderer];
