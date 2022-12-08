const { merge } = require('webpack-merge');
const ComConfig = require('./webpack.common');
const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map'
}
module.exports = merge(ComConfig, devConfig)