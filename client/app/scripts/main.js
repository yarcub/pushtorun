require.config({
  shim: {},

  paths: {
    jquery: 'vendor/jquery.min'
  },  
});
 
require(['http://pushtorun.herokuapp.com/socket.io/socket.io.js', 'dolly'], function(io, dolly) {
  
  console.log("App started");

  var socket = io.connect('http://pushtorun.herokuapp.com/');
   socket.on('update', function () {
     dolly.reloadGenoma("https://raw.github.com/yarcub/pushtorun/master/client/app/scripts/engine/genoma.js");
     //dolly.reloadGenoma("scripts/engine/genoma.js");
   });
  
});