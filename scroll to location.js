// see basecamp for usage info

function topOfPage() {
	$('body,html').animate({scrollTop: 0}, 500);
}

function scrollToLocation(val) {
	var location = $(val).offset().top - 88; //This is to accomodate an 88px high header
	$('body,html').animate({scrollTop: location}, 500);
}