define([], function() {
  return {
  	run : function(){
  		var c = document.querySelector(".container");
  		//this will update the client DOM when runned;
  		c.innerText = new Date() + "=>someone pushed to github";
  	}
  }
});