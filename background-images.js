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

