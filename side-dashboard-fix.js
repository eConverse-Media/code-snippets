$(function() {
    // On the Profile Picture widget, set the bio bubble param to false
    // ShowBioBubble="false"

    var links = $('.welcome-links')
    link = links.find('a:first-child').attr('href')

    $.ajax({
        url: link,
        dataType: 'html',
        success: success
    });

    function success(resp) {
        var profileImg = $(resp).find('div[id*="ProfileImage"] .col-md-12 a[id*="lnkDisplay"] img')

        profileImgSrc = $(profileImg).attr('src');

        console.log(profileImgSrc);

        var dashboardImg = $('.dashboard-img.ContentUserControl div[id*="ProfileImage"] a[id*="ImageControl_lnkDisplay"] img')

        var dashboardImgLink = $('.dashboard-img.ContentUserControl div[id*="ProfileImage"] a[id*="ImageControl_lnkDisplay"]')

        dashboardURL = $('.dashboard-name h4 a').attr('href');
        dashboardName = $('.dashboard-name h4 a').text();
        nameTrim = $.trim(dashboardName)

        $(dashboardImg).attr("src", profileImgSrc);
        $(dashboardImg).attr("title", nameTrim);
        $(dashboardImgLink).attr("href", dashboardURL);
    }
});