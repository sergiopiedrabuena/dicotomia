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
				generator: {
					filename: 'static/fonts/[hash][ext][query]',  // Directorio de salida
				},
				options: {
					limit: 10000, // O LE PASAMOS UN BOOLEANOS TRUE O FALSE
					// Habilita o deshabilita la transformación de archivos en base64.
					mimetype: 'aplication/font-woff',
					// Especifica el tipo MIME con el que se alineará el archivo. 
					// Los MIME Types (Multipurpose Internet Mail Extensions)
					// son la manera standard de mandar contenido a través de la red.
					name: "[name].[ext]",
					// EL NOMBRE INICIAL DEL ARCHIVO + SU EXTENSIÓN
					// PUEDES AGREGARLE [name]hola.[ext] y el output del archivo seria 
					// ubuntu-regularhola.woff
					outputPath: './assets/fonts/',
					// EL DIRECTORIO DE SALIDA (SIN COMPLICACIONES)
					publicPath: './assets/fonts/',
					// EL DIRECTORIO PUBLICO (SIN COMPLICACIONES)
					esModule: false
					// AVISAR EXPLICITAMENTE SI ES UN MODULO
				}
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
