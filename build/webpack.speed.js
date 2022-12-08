const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ComConfig = require("./webpack.common");

const smp = new SpeedMeasurePlugin();

const speedConfig = smp.wrap({
    mode: "production",
    plugins: [
        ...ComConfig.plugins,
        new MiniCssExtractPlugin({
          filename: "main.css",
      }),
    ],
});

module.exports = merge(ComConfig, speedConfig);
