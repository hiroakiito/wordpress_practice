jQuery(function ($) {
  // sp版メニュー開閉
  $('#sp-menu').click(function (event) {
    event.preventDefault();
    $('.nav-menu').toggle();
  });

  // トップへ戻る固定ボタン
  $("#topBtn").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $("#topBtn").fadeIn("fast");
    } else {
      $("#topBtn").fadeOut("fast");
    }
  });
  $('#topBtn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});