var config=require('./webpack.config.js');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');
config.output.publicPath='/';
config.plugins=[
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname,'../app/index/index.html'),
			inject:true
		})
	];
Object.keys(config.entry).forEach(function(key,i){
	var extras=['./build/dev-client'];
	config.entry[key]=extras.concat(config.entry[key]);
});
console.log('config.entry is',config.entry);
module.exports=config;
