$(function () {
    var heroImages = $('.hero-bg-image').toArray(),
    num = Math.floor(Math.random() * heroImages.length);
    
    handleBgImage(heroImages[num], $('.hero'));
});