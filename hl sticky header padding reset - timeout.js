$(function () {
    setTimeout(function(){
        padHeader();
    },500);

    $(window).on('resize orientationChange', function () {
        padHeader();
    });
});

function padHeader() {
    var headerHeight = $('#MPOuterHeader').css('height');
    $('#MPOuter').css('padding-top', headerHeight);
}