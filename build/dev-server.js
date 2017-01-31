var express=require('express');
var path=require('path');
var webpack=require('webpack');
var config=require('./webpack.dev.config.js');

var app=express();
var compiler=webpack(config);

var devMiddleware=require('webpack-dev-middleware')(compiler,{
	publicPath:config.output.publicPath,
	stats:{
		color:true,
		chunks:false
	}
});
app.use(devMiddleware);
var hotMiddleware=require('webpack-hot-middleware')(compiler);
compiler.plugin('compilation',function(compilation){
	compilation.plugin('html-webpack-plugin-after-emit',function(htmlPluginData,callback){
		hotMiddleware.publish({action:'reload'});
		callback();
	});
});
app.use(hotMiddleware);
app.use(express.static('/root/webpack'));
app.use('/students/getStudents',(req,res)=>{
	res.send({name:'chenheli',date:'2017-01-29',address:'qianjiang'});
});
app.listen(8889,function(err){
	if(err){
		console.log(err);
		return
	}
	console.log('Listening at http://www.qjsesx.cn:8889')
})
