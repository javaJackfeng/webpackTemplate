const { merge } = require('webpack-merge');
const ComConfig = require('./webpack.common');
const path = require('path')

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      publicPath: '/',
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 7800,
        historyApiFallback: true,
        compress: true,
        proxy: {
            '/': {
              target: process.env.PROXY,
              secure: false,
              bypass: function (req, res, proxyOptions) {
                if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
                  console.log('Skipping proxy for browser request.');
                  return '/index.html';
                }
              },
            },
        },
    },
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
      runtimeChunk: true,
      minimize: false,
      concatenateModules: false,
      usedExports: false,
    },
}
module.exports = merge(devConfig, ComConfig)