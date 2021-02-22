$(function () {
	$('.past-event').hide();
	$('.counter').hide();
});


// set the date we're counting down to
var target_date = new Date($('.countdown-date .HtmlContent').text()).getTime();
$('.countdown-date').hide();

// variables for time units
var days, hours, minutes, seconds;

// update the tag with id "countdown" every 1 second
setInterval(function() {
	
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime(),
		seconds_left = (target_date - current_date) / 1000,
		isPast = target_date <= current_date;

	if (isPast) {
		$('.past-event').fadeIn();
	} else {
		$('.counter').fadeIn();
		 // do some time calculations
		days = parseInt(seconds_left / 86400);
		seconds_left = seconds_left % 86400;
	
		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;
	
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);
	
		// format countdown string + set tag value
		$('#countdown .days').text(days);
		$('#countdown .hours').text(hours);
		$('#countdown .minutes').text(minutes);
		$('#countdown .seconds').text(seconds);
	}
   
}, 1000);