function handleCommunityHtml() {
    var communityHtml = $('.summary-edit'),
        img = $(communityHtml).find('img');
    $(img).unwrap();
    $(img).prependTo(communityHtml);
    $(img).wrap('<div class="community-image" />');
}