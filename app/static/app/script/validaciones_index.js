$(document).ready(function(){})
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
;

$(document).ready(function(){})
    $('.imagen').hover(function() {
        $(this).animate({ opacity: 0.8 }, 'fast');
    }, function() {
        $(this).animate({ opacity: 1 }, 'fast');
    });
;