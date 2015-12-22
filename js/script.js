//Page and resources loaded.
$(window).ready(function() {
	
	$("#noThanksButton, #exitButton").click(function(){
		$("#mc-embedded-subscribe-form").addClass('closed');
	});

	$("#signUpButton").click(function(){
		$("#mc-embedded-subscribe-form").removeClass('closed');
	});

});