/*
Script to insert and redirect to search page injecting search value into the URL

*/


function handlePageSearch() {
    $('#MainCopy_ContentWrapper .section1').prepend('<div id="page-search" class="page-search-container"><input type="text" class="search" placeholder="Search"><button type="button">Search</button></div>');
    const search = $('#page-search .search');
    $('#page-search button').click(function() {
        const searchValue = $(search).val();
        // Redirect to the new search page with the search query as a parameter
        window.location.href = `/search?executeSearch=true&SearchTerm=${encodeURIComponent(searchValue)}&=1`;
    });

    $(search).on('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const searchValue = $(search).val();
            console.log(searchValue);
            // Redirect to the new search page with the search query as a parameter
            window.location.href = `/search?executeSearch=true&SearchTerm=${encodeURIComponent(searchValue)}&=1`;
        }
    });

}

$(function () {
    handlePageSearch();

});