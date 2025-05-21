function handleAnnouncementCarousel() {
    $('.hero-announcement').wrapAll('<div class="hero-announcements tile slick-dotted" />');
    $('.hero-announcements').slick({
        dots: false,
        arrows: true,
        fade: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
    });
}