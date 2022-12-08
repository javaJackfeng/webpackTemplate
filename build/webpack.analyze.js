const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const proConfig = require('./webpack.prod');
const { merge } = require('webpack-merge');

const config = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}

module.exports = merge(proConfig, config)