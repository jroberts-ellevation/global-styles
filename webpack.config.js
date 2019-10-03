const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './sass/Site.scss'),
	output: {
		filename: 'Site.css'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: { plugins: () => [require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3'] })] }
					},
					{ loader: 'sass-loader' }
				],
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin()
	]
};