$(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

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
    });

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 20
                    }, 600);
                    return false;
                }
            }
        });
    });
});
