import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
 
export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, '../src/index')
  ],
//   resolve: {
// 	alias: {
// 	  vue: 'vue/dist/vue.js'
// 	}
//   },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../src'),
	publicPath: '/',
	// path: '/',
    // publicPath: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
	  }),
	  new HtmlWebpackPlugin({
		template: 'src/index.html',
		inject:true
	}),
	  new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
		{test: /\.vue$/,loader: 'vue-loader',options: {hotReload: true }},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
	  {test: /\.css$/, loaders: ['style-loader','css-loader']},
	  { enforce: "pre", test:/(\.js$)/, loader:"eslint-loader", exclude: /node_modules/}
    ]
  }
};
