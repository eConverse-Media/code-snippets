$(function () {

    $('.new-tab h3 a').each(function() {
        var self = $(this);
        $(self).attr('target', '_blank');
        $(self).attr('rel', 'noopener noreferrer');
    
    });
});