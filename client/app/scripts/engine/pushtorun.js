define([], function() {
  return {
  	run : function(){
  		console.log("engine=>run()");
  		var c = document.querySelector(".container");
  		//this will update the client DOM when runned;
      c.style.background = 'red';
  		c.textContent = "someone pushed to github";
  	}
  }
});