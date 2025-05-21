$(function() {

    // This should be used in conjunction with a <span> tag with the class "copyright-year", placed where you want the date to display

    var year = new Date().getFullYear();

    $('.copyright-year').text(year);
});