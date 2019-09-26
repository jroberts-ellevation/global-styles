const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/Site.scss',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'sass-loader' }
				],
			}
		],
	},
	plugins: [
		new CopyWebpackPlugin(
			[
				{
					from: './node_modules/@fortawesome',
					to: './src/font-awesome'
				}, 
				{
					from: './node_modules/foundation',
					to: './src/foundation'
				}
			]
		)
	]
};