define([], function() {
  return {
  	run : function(){
  		console.log("engine=>run()");
  		var c = document.querySelector(".container");
  		//this will update the client DOM when runned;
      c.style.background = 'red';
      c.style.color = 'black';
  		c.textContent = "someone pushed to github at " + new Date();
      alert("Eliseu?");
  	}
  }
});