$(function(){

  // ページ内scroll
  $('a[href^="#"]').click(function() {
    var speed = 700; // ミリ秒
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


  $('.js_form_submit').click(function() {
    $('.js_form_content').hide();
    $('.section_contact_complete').show();
  });



});

$(window).on("load resize", function() {
  var winWidth = $(window).width();
  if( (winWidth <= 811) ) {
    // slick slider
    $('.js-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 2,
      autoplay: true,
      arrows: false,
      responsive: [{
        breakpoint: 500,settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }],
    });
  } else {
    $('.js-slider').slick('unslick');
  }
});
