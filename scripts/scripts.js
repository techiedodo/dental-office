$(".nav a").on("click", function(){
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

$(document).ready(function(){
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    };

    if(wScroll > 100 ) {
      $('.testimonials').each(function(i){
        setTimeout(function(){
          $('.testimonials').eq(i).addClass('is-showing');
        }, 550 * (i+1));
      });
    };

  });
});
