$(function () {
    $('.HLRecentBlogs ul li').each(function () {
        var self = $(this);
        handleAjaxCall(self, false);
    });
});