$(".js_form_content").submit(function(e){
  e.preventDefault();
  $("#ask-form-button").prop("disabled", true);
  var name = $(".js_form_content #name").val();
  var hurigana = $(".js_form_content #hurigana").val();
  var email = $(".js_form_content #email").val();
  var tel = $(".js_form_content #tel").val();
  var current_situation = $(".js_form_content #current_situation").val();
  var text = $(".js_form_content #text").val();
  var data = {name: name,
              hurigana: hurigana,
              email: email,
              tel: tel,
              current_situation: current_situation,
              text: text};

    //ajax
    $.ajax({
      contentType: "application/json",
      url: "https://8wnlfy8kja.execute-api.ap-northeast-1.amazonaws.com/production/submit",
      type: "POST",
      data: JSON.stringify(data),
      processData: false
    })
    .done(function(data){
      $("#caution-failed").hide();
      $('.js_form_content').fadeOut(300);
      $('.section_contact_complete').delay(300).fadeIn(300);
    })
    .fail(function(){
      $("#caution-failed").hide();
      var html = "<div id='caution-failed' style='height:40px; text-align:center; margin-bottom:10px; color:#efefef; background-color:#c74f3d;'><p style='line-height:40px;'>メッセージ送信に失敗しました。再度お試しください。</p></div>";
      $(html).prependTo(".section_contact_wrap").hide().fadeIn(300);
      $(".js_form_content-button").prop("disabled", false);
    });
});
