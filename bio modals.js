$(function () {
	$('#MPOuter').addClass('has-modal');
	$('.team').each(function () {
		var self = $(this),
			classList = $(self).attr('class').split(' '),
			index = classList.length,
			klass = classList[index - 1],
			img = $(self).find('img'),
            name = $(self).find('h3'),
            position = $(self).find('h4'),
			link = "<button type='button' onclick='openModal(\"" + klass + "\");'>Learn More</button>",
			bioImage = $(img).clone(),
			bioSelector = '.bio.' + klass,
			bio = $(bioSelector).find('.HtmlContent');
			
        $(bio).wrapInner('<div class="bio-text" />');
        $(bioImage).prependTo(bio);
        $(bioImage).wrap('<div class="bio-image" />');
        $(position).clone().prependTo($(bio).find('.bio-text'));
        $(name).clone().prependTo($(bio).find('.bio-text'));
	
			
		$(self).find('.HtmlContent').append(link);
	});
	
	$('.bio').prepend('<button type="button" onclick="closeModal();" class="close-modal"></button>');
	
	$(document).keyup(function (e){
		if (e.keyCode == 27) {
			closeModal();
		}
	});
	$(document).click(function (e) {
		if ($(e.target).hasClass('modal-open')) {
			closeModal();
		}
	});
});

function openModal(val) {
	var klass = '.bio.' + val;
	$(klass).addClass('open');
	$('#MPOuter').addClass('modal-open');
}

function closeModal() {
	$('.bio').removeClass('open');
	$('#MPOuter').removeClass('modal-open');
}