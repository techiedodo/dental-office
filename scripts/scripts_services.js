$(document).ready(function() {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 100) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        };
    });
});

function initMap() {
    var myLatLng = {
        lat: 34.257012,
        lng: -118.604081
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng,
        mapTypeControl: true,
        zoomControl: true,
        streetViewControl: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chatsworth Dental Group'
    });
}
