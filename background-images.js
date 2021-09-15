// updated, more versatile option
function handleBgImage(imgElem, elem) {
    var img = $(imgElem).find('img:first-of-type').attr('src'),
        url = "url('" + img + "')",
        alt = $(imgElem).find('img:first-of-type').attr('alt');

    $(elem).css('background-image', url);
    $(elem).attr('title', alt);
}

$(function () {
    $('.bg-image').each(function () {
        handleBgImage($(this), $(this));
		$(this).find('img:first-of-type').hide();
    });
});

