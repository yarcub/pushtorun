define([], function() {

	var bleatWarning = function(){
		console.warn("[Dolly] can't bleat yet");
	};

	var jumpWarning = function(){
		console.warn("[Dolly] can't jump yet. Teach her how");
	};

  	return {
			//Empty genoma
			genoma : {
				bleat : bleatWarning,
				jump  : jumpWarning
			},

			reloadGenoma : function(genomaUrl){
				console.log("[Dolly] loading genoma");
				var bust = "?bust=" + (new Date()).getTime();
				$.getScript(genomaUrl + bust, function(script, status){
					if(status == "success"){
						console.log("[Dolly] genoma up-to-date");
					}else{
						console.warn("[Dolly] something went wrong updating genoma");
					}
				});
			}
		};

});