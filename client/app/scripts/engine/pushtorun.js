define([], function() {
  return {
  	run : function(){
  		console.log("engine=>run()");
  		var c = document.querySelector(".container");
  		//this will update the client DOM when runned;
      c.style.background = 'yellow';
  		c.textContent = new Date() + "=>someone pushed to github";
  	}
  }
});