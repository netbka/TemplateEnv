// import webpack from 'webpack';
// import clientConfig from '../buildScripts/webpack.config.dev';

// module.exports = function setupDevServer(app){
// 	const clientCompiler = webpack(clientConfig);
// 	app.use(req)
// }
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
