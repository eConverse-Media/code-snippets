function handleImageSections() {
    $('.image-left').each(function () {
        var htmlcontent = $(this).find('.HtmlContent');
        var image = $(htmlcontent).find('img');
        var imgSrc = $(image).attr('src');
        $(image).hide();
        $(htmlcontent).wrapInner('<div class="col-md-6"/>');
        $(htmlcontent).prepend('<div style="background-image: url(' + imgSrc + ')" class="col-md-6" />');
    });

    $('.image-right').each(function () {
        var htmlcontent = $(this).find('.HtmlContent');
        var image = $(htmlcontent).find('img');
        var imgSrc = $(image).attr('src');
        $(image).hide();
        $(htmlcontent).wrapInner('<div class="col-md-6"/>');
        $(htmlcontent).append('<div style="background-image: url(' + imgSrc + ')" class="col-md-6" />');
    });
}

$(function () {

    handleImageSections();

});