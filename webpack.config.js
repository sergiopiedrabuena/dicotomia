const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@images': path.resolve(__dirname, 'src/assets/images/')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/i,  // Tipos de fuentes a incluir
				type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		historyApiFallback: true,
	}
}