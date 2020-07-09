const merge = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(
  {
    mode: "development",
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
