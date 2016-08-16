$(document).ready(function() {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (wScroll > 100) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        };

        if (wScroll > $('.top-row').offset().top - ($(window).height() / 1.25)) {
            $('.testimonials').each(function(i) {
                setTimeout(function() {
                    $('.testimonials').eq(i).addClass('is-showing');
                }, 650 * (i + 1));
            });
        };

        if (wScroll > $('#contact').offset().top - ($(window).height() / 1.25)) {
            $('.contact-section').each(function(i) {
                setTimeout(function() {
                    $('.contact-section').eq(i).addClass('is-showing');
                }, 650 * (i + 1));
            });
        };
    });


    $('body').scrollspy({
        target: '#dental-navbar-collapse',
        offset: 100
    });
    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh')
    });

    $('#dental-navbar-collapse a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 500, function() {
                window.location.hash = hash;
            })
        };
    });
});
