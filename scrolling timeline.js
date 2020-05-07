// see basecamp for setup, demo and CSS

$(function () {
    $('.panel.timeline').wrap('<li class="timeline-item clearfix" />');
    $('.timeline-item').wrapAll('<ul class="timeline-container" />');
    $('.timeline-container').append('<div style="clear: both;" />');
    $('.timeline h2').wrap('<div class="timeline-button" />');
    $(window).on('scroll resize', checkIfInView);
    $(window).trigger('scroll');
});
