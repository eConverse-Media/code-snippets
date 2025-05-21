function handleImageTiles() {
    $('.img-tile').each(function () {
        var self = $(this);
        $(self).prepend('<div class="img-container" />');
        handleBgImage($(self), $(self).find('.img-container'));
        $(self).find('p:has(img:only-child)').remove();
    });
}
function handleIconTiles() {
    $('.icon-tile').each(function () {
        var self = $(this).find('.HtmlContent'),
            link = $(self).find('h3 a'),
            href = $(link).attr('href'),
            target = $(link).attr('target');
        $(self).wrapInner('<a href="' + href + '" />');
        if (target == "_blank") {
            $(self).find('> a').attr('target', '_blank');
            $(self).find('> a').attr('rel', 'noopener');
        }
        $(link).contents().unwrap();
    });
}