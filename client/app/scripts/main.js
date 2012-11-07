require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min'
  }
});
 
require(['http://pushtorun.herokuapp.com/socket.io/socket.io.js?timestamp=' + (new Date()).getTime(), 'app'], function(io, app) {
  console.log("App initialized");
   var socket = io.connect('http://pushtorun.herokuapp.com/');
  	socket.on('update', function (data) {
    	console.log(data.msg);
      app.reloadEngine();
  	});
});