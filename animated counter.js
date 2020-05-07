// see basecamp for demo

$(function() {
    $('.counter').wrapAll('.counter-wrap');
    $('.counter h3').each(function() {
        $(this).wrapInner("<span class='count'></span>");
    });

    checkNums();
});

function checkNums() {
    $('span.count').each(function() {

        var stringToNum = parseFloat($(this).text());
        decimals = stringToNum.toFixed(1);
        digitCount = stringToNum.toFixed()
        digits = digitCount.length


        if (digits <= 4) {
            if (decimals % 1 == 0) {
                $(this).animate({
                    Counter: parseFloat($(this).text().replace(/,/g, ''))
                }, {
                    duration: 6000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text((now).toFixed());
                    }
                })

            } else {
                $(this).animate({
                    Counter: parseFloat($(this).text().replace(/,/g, ''))
                }, {
                    duration: 6000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text((now).toFixed(1) + " " + "Million");
                    }
                })
            }
        } else if (digits >= 5) {

            $(this).animate({
                Counter: parseFloat($(this).text().replace(/,/g, ''))
            }, {
                duration: 6000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now).toLocaleString('en'));
                }
            })
        }

    });
}