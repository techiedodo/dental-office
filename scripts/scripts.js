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


    function _(id) {
        return document.getElementById(id);
    };

    function submitForm() {
        _("mybtn").disabled = true;
        _("status").innerHTML = 'please wait ...';
        var formdata = new FormData();
        formdata.append("patientName", _("patientName").value);
        formdata.append("patientEmail", _("patientEmail").value);
        formdata.append("patientMessage", _("patientMessage").value);
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "php/message_parser.php");
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                if (ajax.responseText == "success") {
                    _("my_form").innerHTML = '<h2>Thanks ' + _("n").value + ', your message has been sent.</h2>';
                } else {
                    _("status").innerHTML = ajax.responseText;
                    _("mybtn").disabled = false;
                }
            }
        }
        ajax.send(formdata);
    }
});
