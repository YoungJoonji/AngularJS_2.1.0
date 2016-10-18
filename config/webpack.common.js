const utils = require('./utils');

const webpack = require('webpack');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor':    './src/vendor.ts',
        'main':      './src/main.ts'
    },
    resolve: {
        root: [utils.root('src')],
        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['node_modules']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    utils.root('node_modules/rxjs'),
                    utils.root('node_modules/@angular')
                ]
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [utils.root('src/index.html')]
            }
        ]
    },
    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({name: ['polyfills', 'vendor'].reverse()})
    ]
}