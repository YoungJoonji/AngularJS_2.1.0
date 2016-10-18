process.env.ENV = 'production';

const utils = require('./utils');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = webpackMerge(commonConfig, {
    debug: false,
    devtool: 'source-map',
    output: {
        path: utils.root('ipt'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
        new WebpackMd5Hash(),
        new DedupePlugin(),
        new UglifyJsPlugin({
            beautify: false,
            mangle: true,
            compress: true,
            comments: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        })
    ],
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: utils.root('ipt')
    }
});
