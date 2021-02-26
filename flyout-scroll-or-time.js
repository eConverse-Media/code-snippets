$(function () {
	var closed = false;
	$(window).scroll(function () {
		var loc = $(window).scrollTop();
		if (loc > 300 && !closed) {
			$('.time-scroll-flyout').removeClass('open');
			closed = true;
		}
	});
	setTimeout(function () {
		if (!closed) {
			$('.time-scroll-flyout').removeClass('open');
			closed = true;
		}
	}, 5000);
	$('.time-scroll-flyout').click(function () {
		closed = true;
		$('.time-scroll-flyout').toggleClass('open');
	});
});