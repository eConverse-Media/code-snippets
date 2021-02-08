$(function () {

    class eventList extends HTMLElement {
        constructor() {
            super();

            var url = 'https://api.connectedcommunity.org/api/v2.0/Events/GetUpcoming?maxRecords=10',
                showImage = this.getAttribute('show-image'),
                maxResults = this.getAttribute('max-results');

            $.ajax({
                url: url,
                datatype: 'json',
                success: success,
                headers: {
                    'HLIAMKey': '78e2c103-9b11-4e73-bb3d-5ecb6cf4005c'
                }
            });

            function success(resp) {
                $('#MainCopy_ContentWrapper .section1').append('<div class="events-list" />');
                var maxLength = !!maxResults ? maxResults : resp.length;
                for (var i = 0; i < maxLength; i++) {
                    var currentElem;
                    $('<div class="event-elem" />').appendTo('.events-list');
                    currentElem = $('.events-list .event-elem:last-child');
                    if (!!resp[i].PictureUrl && showImage) {
                        $(currentElem).append('<img class="img-responsive" src="' + resp[i].PictureUrl + '"/>');
                    }
                    $(currentElem).append('<h3><a href="' + resp[i].LinkToEventDetails + '">' + resp[i].EventTitle + '</a></h3><h5><strong>Date:</strong> ' + resp[i].FormatedDateRange + '</h5><div>' + resp[i].EventDescription + '</div>');
                }
            }

        }
    }
    customElements.define('event-list', eventList);
});