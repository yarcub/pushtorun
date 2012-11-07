define([], function() {
  return{ reloadEngine: function(){
  		console.log("reloading engine");
  		require('[https://github.com/yarcub/pushtorun/raw/master/client/app/scripts/engine/pushtorun]', function(engine){
  			engine.run();
  		});
  	}
  };
});