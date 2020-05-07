$(function() {
    $('.tab-content').hide();
    $('.tab-content').wrapAll('<div class="tab-content-wrap"></div>');
    var klass;
    handlePageLoadResize(klass);
    
    $('.dropdown-links').change(function () {
         var selected = $(this).find(":selected");
         klass = selected.attr('id');
         $('.tab-links li').removeClass('active');
         showTabContent(klass);
     });
    
    $('.tab-links li').click(function () {
         var elem = $(this).context,
             link = $(elem).find('a');
         klass = link.attr('id');
         $('.tab-links li').removeClass('active');
         $(this).addClass('active');
         showTabContent(klass);
     });
    
     $(window).resize(function () {
         handlePageLoadResize(klass);
     });
    
 });
 
 function handlePageLoadResize(klass) {
     var isDropdown = checkIfDropdown();
     if (isDropdown) {
         if (!klass) {
             klass = $('.dropdown-nav').attr('class');
         }
         handleLoadResizeDropdown(klass);
     } else {
         if (!klass) {
             klass = $('.tabs-nav').attr('class');
         }
         handleLoadResizeTabs(klass);
     }
 }
 
 function checkIfDropdown() {
     if ($('.tabs-nav').css('display') == 'none') {
         return true;
     } else {
         return false;
     }
 }
 
 function handleLoadResizeDropdown(klass) {
     var hasActiveTab = false;
     $('.dropdown-links option').each(function () {
         var self = $(this),
             elementId = self.attr('id');
         if (klass.indexOf(elementId) >= 0) {
             $(self).attr('selected', 'selected');
             showTabContent(elementId);
             hasActiveTab = true;
         }
     });
    if (!hasActiveTab) {
         $('.dropdown-links #all').attr('selected', 'selected');
         showTabContent('all');
    }
 }
 
 function handleLoadResizeTabs(klass) {
     var hasActiveTab = false;
     $('.tab-links li').each(function () {
         var self = $(this),
             elem = self.context,
             link = $(elem).find('a'),
             elementId = link.attr('id');
         if (klass.indexOf(elementId) >= 0) {
             $(self).addClass('active');
             showTabContent(elementId);
             hasActiveTab = true;
         }
     });
    if (!hasActiveTab) {
         $('.tab-links #all').parent().addClass('active');
         showTabContent('all');
    }
 }
 
 function showTabContent(tabClass) {
     $('.tab-content').each(function () {
         var self = $(this),
             classes = self.attr('class');
         if (classes.indexOf(tabClass) >= 0 || tabClass === 'all') {
             self.show();
         } else {
             self.hide();
         }
     });
 }