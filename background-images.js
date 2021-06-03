// updated, more versatile option
function handleBgImage(imgElem, elem) {
    var img = $(imgElem).find('img').attr('src'),
        url = "url('" + img + "')",
        alt = $(imgElem).find('img').attr('alt');

    $(elem).css('background-image', url);
    $(elem).attr('title', alt);
}

$(function () {
    $('.bg-image').each(function () {
        handleBgImage($(this), $(this));
		$(this).find('img').hide();
    });
});

