define([], function() {
  return{ reloadEngine: function(){
  		console.log("reloading engine");
  		require(['https://raw.github.com/yarcub/pushtorun/master/client/app/scripts/engine/pushtorun.js'], function(engine){
  			engine.run();
  		});
  	}
  };
});