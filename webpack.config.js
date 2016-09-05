const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const validate = require('webpack-validator');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    style: [
        path.join(__dirname, 'node_modules', 'purecss'),
        path.join(__dirname, 'app', 'main.css'),
        path.join(__dirname, 'node_modules', 'purecss','build','grids-responsive-min.css')
    ]
};

const config = {
    entry: {
        app: PATHS.app,
        style: PATHS.style
    },
    output: {
        path: PATHS.build,
        publicPath: '/web-demo/',
        filename: '[name].js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.style
            }, 
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                },
                // include: PATHS.app
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        // new CleanPlugin([PATHS.build]),
        new HtmlWebpackPlugin({
            title: 'web-demo',
        }),
        new webpack.HotModuleReplacementPlugin()
        // new ExtractTextPlugin('[name].[chunkhash].css'),
        // new PurifyCSSPlugin({
        //     basePath: process.cwd(),
        //     paths: [PATHS.app]
        // })
    ]
};

module.exports = validate(config, {quite: true});