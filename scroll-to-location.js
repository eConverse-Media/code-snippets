// see basecamp for usage info

function topOfPage() {
	$('body,html').animate({scrollTop: 0}, 500);
}

function scrollToLocation(val) {
	var headerHeight = !!($('#MPOuterHeader').hasClass('stickyNav') || $('#NAV').hasClass('stickyNav')) ? $('#MPOuterHeader').outerHeight() : 0;
	var location = $(val).offset().top - headerHeight; 
	$('body,html').animate({scrollTop: location}, 500);
}