import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import common from './webpack.common.js';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
module.exports = merge(common, {
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
		
	  },	
  plugins: [
	new UglifyJSPlugin(
		{
			mangle: true,
			comments: false,
			compress: {warnings: false}
		  }
	),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html',
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes:true,
        minifyJS:true,
        minifyCSS:true,
      },
      inject:true,
      hash: true
	  }),
	  //Generate an external css file with a hash
	 new ExtractTextPlugin('[name].[contenthash].css'),
  ]
});
