$(function () {
	var closed = false,
		isTimedOut,
		isPastScrollTop,
		loc;
	$(window).scroll(function () {
		loc = $(window).scrollTop();
		if (loc > 400) {
			isPastScrollTop = true;
			if (isTimedOut && !closed) {
				$('.time-and-scroll-flyout').removeClass('open');
				closed = true;
			}
		}
	});
	setTimeout(function () {
		isTimedOut = true;
		if (isPastScrollTop && !closed) {
			$('.time-and-scroll-flyout').removeClass('open');
			closed = true;
		}
	}, 5000);
	$('.time-and-scroll-flyout').click(function () {
		closed = true;
		$('.time-and-scroll-flyout').toggleClass('open');
	});
});