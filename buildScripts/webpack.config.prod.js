import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, '../src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist'),
	publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
	  }),
	  //Create HTML file and include reference to bundled JS
	  new HtmlWebpackPlugin({
		  template: './src/index.html',
		  inject:true
	  }),
	  //remove duplications
	  new webpack.optimize.DedupePlugin(),
	  //new webpack.HotModuleReplacementPlugin(),
	  //Minify JS
	  new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
};
