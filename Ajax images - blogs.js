function handleAjaxCall(self) {
    var href = $(self).find('h3 a').attr('href');

    // handle image 

    var imgContainer = '<div class="img-container loading" />';
    $(self).wrapInner('<div class="text-container" />');
    $(self).append(imgContainer);
    $.ajax({
        url: href,
        dataType: 'html',
        success: success,
        error: removeLoading
    });
    
    function success(resp) {
        var img = $(resp).find('.blogs-block > div[id*="UpdatePanel"] > .row:not(.margin-bottom-medium) > .col-md-12 img:first-of-type'),
            src = $(img).attr('src');

        if (!!src) {
            var url = "url('" + src + "')";
            $(self).find('.img-container').css('background-image', url);
        }
        
        removeLoading();
    }

    function removeLoading() {
        $(self).find('.img-container').removeClass('loading');
    }
}