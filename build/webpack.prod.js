const { merge } = require("webpack-merge");
const ComConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = {
    mode: "production",
    optimization: {
        usedExports: true,
        splitChunks: false,
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: true,
            })
        ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "main.css"
      })
    ],
};

module.exports = merge(ComConfig, prodConfig);
