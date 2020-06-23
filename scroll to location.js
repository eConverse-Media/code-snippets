// see basecamp for usage info

function topOfPage() {
	$('body,html').animate({scrollTop: 0}, 500);
}

function scrollToLocation(val) {
	var location = $(val).offset().top; //To accommodate a header, subtract the header height
	$('body,html').animate({scrollTop: location}, 500);
}