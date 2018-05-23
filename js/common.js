$(function(){

  // page top scroll
  $(document).ready(function() {
    var pagetop = $('.pagetop');
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });


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


  //ハンバーガーメニュー
  $(".menu-trigger").click(function() {
    $(this).toggleClass("open");
    if($(".menu-trigger").hasClass("open")) {
      $(".menu").show();
      $(".eylogo, .menu-overlay, .header-upper__logo").addClass("open");
      setTimeout(function() {
        $(".menu > ul").each(function(i) {
          $(this).delay(90*i).animate({"opacity": 1, "left": 0}, 300);
        });
      }, 300);
    } else {
      $(".menu > ul").each(function() {
        $(this).animate({"opacity": 0, "left": "50px"}, 300);
      });
      setTimeout(function() {
        $(".menu").hide();
      }, 500);
      setTimeout(function() {
        $(".eylogo, .menu-overlay, .header-upper__logo").removeClass("open");
      }, 100);
    }
  });

  // トップ動き wow.js
  new WOW().init();


});
