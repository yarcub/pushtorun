require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min'
  }
});
 
require(['http://pushtorun.herokuapp.com:80/socket.io/socket.io.js', 'app'], function(io, app) {
  console.log("App initialized");
   var socket = io.connect('http://pushtorun.herokuapp.com:80/');
  	socket.on('update', function (data) {
    	console.log(data.msg);
      app.reloadEngine();
  	});
});