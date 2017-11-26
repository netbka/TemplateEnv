const webpack = require('webpack');
const clientConfig = require('./webpack.config.dev');

module.exports = function setupDevServer(app){
	const clientCompiler = webpack(clientConfig);
	app.use(
		require("webpack-dev-middleware")(clientCompiler, {
			noInfo:true,
			publicPath: config.output.publicPath,
		})
	);
	app.use(
		require("webpack-hot-middleware")(clientCompiler));
};
