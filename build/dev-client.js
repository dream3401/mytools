var hotClient=require('webpack-hot-middleware/client');
hotClient.subscribe(function(event){
	if(event.action=='reload'){
		console.log('event reload')
		window.location.reload()
	}
})
