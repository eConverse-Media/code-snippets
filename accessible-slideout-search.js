function handleSearch() {
    $('.search-bar-top').wrap('<div class="search-wrap" />');
    $('.search-wrap').append('<button aria-label="open search" class="search-btn-top" type="button" onclick="toggleSearch();"></button>');
    $('.search-wrap input[id*="SearchTerm"], .search-wrap button[id*="SearchButton"]').attr('disabled', true);
    $('.search-bar-top .form-control').attr('placeholder', 'Search...');
    $('#searchColumn .form-control').attr('placeholder', 'Search...');
    $('.homepage-search .SearchInputs .form-control').attr('placeholder', 'Search...');
    $('.search-wrap').prependTo('#searchColumn');
    $(document).click(function (e) {
        var searchBar = $('.search-bar-top'),
            searchButton = $('.search-btn-top'),
            target = e.target;
        if (!($(target).is(searchBar)) &&
            !($(target).is(searchButton)) &&
            !($(target).closest('.search-bar-top').html()) &&
            !($(target).closest('.search-btn-top').html())) {
                closeSearch();
        }
    });
}
function toggleSearch() {
    if ($('.search-wrap').hasClass('open')) {
        closeSearch();
    } else {
        openSearch();
    }
}
function closeSearch() {
    $('.search-wrap').removeClass('open');
    $('.search-btn-top').attr('aria-label', 'open search');
    setTimeout(function () {
        $('.search-wrap input[id*="SearchTerm"], .search-wrap button[id*="SearchButton"]').attr('disabled', true);
    }, 300);
}
function openSearch() {
    $('.search-wrap').addClass('open');
    $('.search-wrap input[id*="SearchTerm"], .search-wrap button[id*="SearchButton"]').attr('disabled', false);
    $('.search-btn-top').attr('aria-label', 'close search');
    $('.search-bar-top .form-control').focus();
}