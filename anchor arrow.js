$(function () {
    $('.anchor-arrow').wrap('<a id="anchor-arrow-id" />');
    /* before each place you want to scroll to, add an anchor */
    var anchorArrow = document.getElementById('anchor-arrow-id');
    if (anchorArrow) {
        anchorArrow.addEventListener('click', function () {
            var target,
                anchorLocations = [
                    /* array of the locations of each of the anchors you've added */
                ],
                lastAnchor = Math.floor(anchorLocations[7]); /*the last anchor location */
            if ($(document).scrollTop() >= lastAnchor) {
                target = 0;
            } else {
                $.each(anchorLocations, function (key, val) {
                    if ($(document).scrollTop() < Math.floor(val)) {
                        target = val;
                        return false;
                    }
                });
            }
            $('body,html').animate({ scrollTop: target }, 500);
        });
        $(window).scroll(function () {
            var lastAnchor = Math.floor($('#anchor-8').offset().top - 66), /*the last anchor location */
                currentPosition = $(document).scrollTop(),
                hasUpArrow = $('.anchor-arrow').hasClass('up-arrow');
            if (currentPosition >= lastAnchor && !hasUpArrow) {
                $('.anchor-arrow').addClass('up-arrow');
            } else if (currentPosition < lastAnchor && hasUpArrow) {
                $('.anchor-arrow').removeClass('up-arrow');
            }
        });
    }
});