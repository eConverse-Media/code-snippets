// see basecamp for CSS

$(function() {
    $(".accordion-heading").each(function() {
        $(this).next(".accordion-text").andSelf().wrapAll("<div class='accordion-wrap' />");
    });
    
    $('.accordion-heading button').on('click', function() {
        var items = [];
        $('.accordion-wrap').each(function (i, item) {
            items.push(item);
        });
        $parent_box = $(this).closest('.accordion-wrap');
        $parent_box.siblings().find('.accordion-text').slideUp();
        $parent_box.find('.accordion-text').slideToggle(600, 'swing');
        $parent_box.toggleClass('open');
        var selected = $(items).index($parent_box);
        for (var j = 0; j < items.length; j++) {
            if (j !== selected) {
                $(items[j]).removeClass('open');
            }
        }
    });
});   