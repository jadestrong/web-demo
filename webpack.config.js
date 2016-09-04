const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	style: [
		path.join(__dirname, 'node_modules', 'purecss'),
		path.join(__dirname, 'app', 'main.css')
	]
};

module.exports = {
	entry: {
		app: PATHS.app,
		style: PATHS.style
	},
	output: {
		path: PATHS.build,
		publicPath: '/web-demo/'
		filename: '[name].[chunkhash].js',
		chunkFileName: '[chunkhash].js'
	},
	devtool: 'eval-source-map',
	devServer: {
		host: process.env.HOST,
		port: process.env.PORT
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style','css'),
				include: PATHS.style
			},
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new CleanPlugin([PATHS.build]),
		new HtmlWebpackPlugin({
			title: 'web-demo'
		}),
		new ExtractTextPlugin('[name].[chunkhash].css'),
		new PurifyCSSPlugin({
			basePath: process.cwd(),
			paths: [PATHS.app]
		})
	]
};