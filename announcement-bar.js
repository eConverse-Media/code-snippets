function getCookies(cname) {
    announcementBarCookies = [];
    var name = cname;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        announcementBarCookies.push(c);
        }
    }
}

function handleAnnouncementBar() {
    getCookies('announcementBar');
    var announcementBars = $('.announcement-bar').toArray();
    for (var i = 0; i < announcementBarCookies.length; i++) {
        var text = announcementBarCookies[i].substring(announcementBarCookies[i].indexOf('=') + 2, announcementBarCookies[i].length - 1);
        for (var j = 0; j < announcementBars.length; j++) {
           if ($(announcementBars[j]).text() == text) {
               $(announcementBars[j]).hide();
           } else {
               $(announcementBars[j]).append('<button type="button" onclick="closeAnnouncement(this);"><i class="ift ift-close ift-2x"></i></button>');
           }
        }
    }

    if (!announcementBarCookies.length) {
        $('.announcement-bar').append('<button type="button" onclick="closeAnnouncement(this);"><i class="ift ift-close ift-2x"></i></button>');
    }

}

function closeAnnouncement(elem) {
    $(elem).closest('.announcement-bar').hide();
    getCookies('announcementBar');
    var text = $(elem).closest('.announcement-bar').text(),
        num = announcementBarCookies.length + 1;

    document.cookie = "announcementBar" + num + "='" + text + "'; path=/";
}

$(function () {
    handleAnnouncementBar();
});