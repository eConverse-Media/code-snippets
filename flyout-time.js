$(function () {
	var clicked = false;
	setTimeout(function () {
		if (!clicked) {
			$('.time-flyout').removeClass('open');	
		}
	}, 5000);
	$('.time-flyout').click(function () {
		clicked = true;
		$('.time-flyout').toggleClass('open');
	});
});