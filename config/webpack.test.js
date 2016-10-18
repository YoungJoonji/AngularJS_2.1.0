process.env.ENV = 'test';

const utils = require('./utils');

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    resolve: {
        root: [utils.root('src')],
        extensions: ['', '.ts', '.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: [utils.root('node_modules')]
            },
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
                exclude: [/\.e2e\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [utils.root('src/index.html')]
            }
        ],
        postLoaders: [
            {
                test: /\.(js|ts)$/,
                loader: 'istanbul-instrumenter-loader',
                include: utils.root('src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    }
}
