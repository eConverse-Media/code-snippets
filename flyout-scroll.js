$(function () {
	var clicked = false;
	$(window).scroll(function () {
		var loc = $(window).scrollTop();
		if (loc > 200 && !clicked) {
			$('.scroll-flyout').removeClass('open');
		}
	});
	$('.scroll-flyout').click(function () {
		clicked = true;
		$('.scroll-flyout').toggleClass('open');
	});
});