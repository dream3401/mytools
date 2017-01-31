var path=require('path');
module.exports={
	entry:{
		index:path.resolve(__dirname,'../app/index/index.js'),
	},
	output:{
		path:path.resolve(__dirname,'../output/static'),
		publicPath:'/',
		filename:'[name].[hash].js',
		chunkFilename:'[id].[chunkhash].js'
	},
	resolve:{
	    	alias: {
		      'vue$': 'vue/dist/vue.common.js'
		},
		extensions:['','.js','.vue']
	},
	module:{
		loaders:[
		      {
			test: /\.vue$/,
			loader: 'vue',
		      },
		      {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		      },
		]
	},
	babel: {
		    presets: ['es2015', 'stage-0'],
		    plugins: ['transform-runtime']
		  },
}
