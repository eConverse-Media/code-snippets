// updated, more versatile option
function handleBgImage(imgElem, elem) {
    var img = $(imgElem).find('img:first-of-type'),
        src = $(img).attr('src'),
        url = "url('" + src + "')";

    $(elem).css('background-image', url);
    $(img).addClass('sr-only');
}

$(function () {
    $('.bg-image').each(function () {
        handleBgImage($(this), $(this));
    });
});