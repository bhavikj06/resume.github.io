$(window).scroll(function(){
	if ($(window).scrollTop()) {
		$("nav").addClass("scrolled");
	}
	else{
		$("nav").removeClass("scrolled");
	}
})
