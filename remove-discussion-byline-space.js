$(function () {
    $('.HLDiscussions ul li').each(function () {
        var self = $(this),
            byline = $(self).find('.ByLine'),
            bylineText = $(byline).html(),
            bylineToLink = bylineText.substring(0, (bylineText.indexOf('</a>') + 4)),
            bylineFromComma = bylineText.substring(bylineText.indexOf(','), bylineText.length - 1);


        bylineToLink = $.trim(bylineToLink);
        bylineFromComma = $.trim(bylineFromComma);

        $(byline).html(bylineToLink + bylineFromComma);
    });
});