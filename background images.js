// updated, more versatile option
function handleBgImage(imgElem, elem) {
    var img = $(imgElem).find('img').attr('src'),
        url = "url('" + img + "')";

    $(elem).css('background-image', url);
}

$(function () {
    $('.bg-image').each(function () {
        handleBgImage($(this), $(this));
		$(this).find('img').hide();
    });
});

// basic
$(function () {
    $('.bg-image').each(function () {
		var bgImg = $(this).find($('img:first-child')),
			imgSrc = "url('" + bgImg.attr('src') + "')";
            
       
        $(this).css('background-image', imgSrc);
		bgImg.hide();
	});
});


// with image wrap
$(function () {
    $('.bg-image').each(function () {
		var bgImg = $(this).find($('img:first-child')),
			imgSrc = "url('" + bgImg.attr('src') + "')";
            
        if ($(this).hasClass('img-wrap')) {
            $(this).find('.HtmlContent').css('background-image', imgSrc);
        } else {
            $(this).css('background-image', imgSrc);
        }
		bgImg.hide();
	});
});