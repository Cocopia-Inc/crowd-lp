$(function(){

  // page top scroll
  $(document).ready(function() {
    var pagetop = $('.pagetop');
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

  // kv action
  setTimeout(function(){
    $(".top-kv h1").addClass('show')
  },500);
  setTimeout(function(){
    $(".top-kv h1 img").addClass('active')
  },1500);
  setTimeout(function(){
    $(".top-kv h1").addClass('active')
  },3000);
  setTimeout(function(){
    // slick
    $('.kv-slider').slick({
      fade: true,
      arrows: false,
      autoplay: true,
      speed: 2000,
      pauseOnHover: false
    });
  },4200);
  setTimeout(function(){
    $(".top-kv-img").addClass('active')
  },4200);


  // ページ内scroll
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
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

  // scrollbar
  $(window).on("load",function(){
    $(".js-scroll-box").mCustomScrollbar({
      advanced:{
        updateOnContentResize: true
      }
    });
  });
  
});
