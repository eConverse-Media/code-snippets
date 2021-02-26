$('body').css('visibility', 'hidden');

$(document).ready(function () {

    $('body').css('visibility', 'visible').hide().fadeIn('slow');

    var headerHeight = $("#MPOuterHeader").height();

    $("#MPOuter").css("padding-top", parseInt(headerHeight) + 5);

});