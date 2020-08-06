$(function () {
    handleAllAjaxCalls();
    var observedNode = $('div[id*="BlogContents"]')[0];

    createObserver(observedNode);
});

function handleAllAjaxCalls() {
    $('.blogs-block').each(function () {
        var self = $(this);

        handleAjaxCall(self);
    });
}

function handleAjaxCall(self) {
    var href = $(self).find('h3 a').attr('href');

    // handle image 

    var imgContainer = '<div class="img-container loading" />';
    $(self).prepend(imgContainer);
    $.ajax({
        url: href,
        dataType: 'html',
        success: success
    });
    
    function success(resp) {
        var img = $(resp).find('.blogs-block > div[id*="UpdatePanel"] > .row:not(.margin-bottom-medium) > .col-md-12 img:first-of-type'),
            src = $(img).attr('src');

        if (!!src) {
            var url = "url('" + src + "')";
            $(self).find('.img-container').css('background-image', url);
            $(self).find('.img-container').removeClass('loading');
        }
            
    }
}

function createObserver(targetNode) {
    var config = {
        childList: true
    }

    var callback = function(mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                handleAllAjaxCalls();
            } 
        }
    }

    var observer = new MutationObserver(callback);

    observer.observe(targetNode, config);
}