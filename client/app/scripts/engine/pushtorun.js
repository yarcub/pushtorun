define([], function() {
  return {
  	run : function(){
  		var c = document.querySelector(".container");
  		c.innerText = new Date() + "=>someone pushed to github";
  	}
  }
});