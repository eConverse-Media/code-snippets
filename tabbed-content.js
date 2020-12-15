function generateTabs() {

    // Add class tabbed-content to the closest section to content items with the class tabs
    $('.tabs').closest('div[class*="section"]').addClass('tabbed-content');

    // Initialize and set counter that will be used to set unique id's and hrefs contecting tab nav items to tab content items
    var counter = 1;

    // Iterate over each HL section that has tabs to prepend bootstrap nav-tab markup
    $('.tabbed-content').each(function () {

        // Grab direct parent of tabs content items and add 
        var firstDiv = $('.tabs').parent();

        if (!$(firstDiv).hasClass('has-tab-nav')) {
            $(firstDiv).prepend('<div class="row-groups"><div class="container"><div class="row"><div class="col-md-12"><ul class="nav nav-tabs" role="tablist"></ul></div></div><div class="row"><div class="col-md-12"><div class="tab-content"></div></div></div></div></div>').addClass('has-tab-nav');;
        }

        var tabContent = $(this).find('.tab-content');

        var tabs = $(this).find('.tabs');

        $(tabs).each(function () {
            $(this).wrap('<div id="tab-' + counter + '" class="tab-pane" aria-labelledby="tab-' + counter + '" role="tabpanel" ></div>');

            $(tabContent).append($('#tab-' + counter));

            var navTabs = $(this).closest('.tabbed-content').find('.nav-tabs');

            $(navTabs).append('<li role="presentation"><a href="#tab-' + counter + '" aria-controls="all" role="tab" data-toggle="tab">FIRST TAB</a></li>');

            // Get ttab title without additional add button text
            var tabTitle = $(this).find('.heading h2:first-of-type:not(a[id*="Add"]),  > h2:not(a[id*="Add"])').clone().children().remove().end().text();

            $(this).find($('.nav-tabs a[href="#tab-' + counter + '"]').text(tabTitle));

            counter++;

        });

    });

    $('.tabbed-content .nav-tabs > li:first-of-type').addClass('active');

    $('.tabbed-content .tab-content > div.tab-pane:first-of-type').addClass('active');
}

$(function () {
    generateTabs();

});