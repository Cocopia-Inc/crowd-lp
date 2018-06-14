$(function(){

  // ページ内scroll
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 700; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


  $('.js_form_submit').click(function() {
    $('.js_form_content').hide();
    $('.section_contact_complete').show();
  });


  // header
  // $(window).on('scroll', function() {
  //   var w = $(window).width();
  //   var x = 1090;
  //   $('#header').toggleClass('header-fixed', $(this).scrollTop() > 500);
  // });


});
