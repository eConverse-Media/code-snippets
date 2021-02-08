$(function () {

    class blogList extends HTMLElement {
        constructor() {
            super();

            var url = 'https://api.connectedcommunity.org/api/v2.0/Blogs/GetLatestEntries',
                maxResults = this.getAttribute('max-results');

                if (!!maxResults) {
                    url += '?MaxRecords=' + maxResults;
                }

            $.ajax({
                url: url,
                type: "POST",
                datatype: 'json',
                success: success,
                headers: {
                    'HLIAMKey': '78e2c103-9b11-4e73-bb3d-5ecb6cf4005c'
                }
            });

            function success(resp) {
                for (var i = 0; i < resp.length; i++) {
                    var currentElem;
                    $('<div class="blog-elem" />').appendTo('blog-list');
                    currentElem = $('blog-list .blog-elem:last-child');
                    $(currentElem).append('<h3><a href="' + resp[i].LinkToReadBlog + '">' + resp[i].BlogTitle + '</a></h3><h5><strong>By: </strong><a href=" ' + resp[i].Author.LinkToProfile + '">' + resp[i].Author.FirstName + ' ' + resp[i].Author.LastName + '</a></h5><h5><strong>Date:</strong> ' + resp[i].PublishedOn + '</h5><div>' + resp[i].BlogText + '</div>');
                }
            }

        }
    }
    customElements.define('blog-list', blogList);
});