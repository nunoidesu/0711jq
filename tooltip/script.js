$(function() {
  $("li").hover(function() {
    // body内の最後に#tooltipを追加
    $("body").append('<div id="tooltip"><p></p></div>');

    // ツールチップのp要素にアイコンのalt属性の値を設定
    $("#tooltip p").html($(this).children().attr("alt"));

    // ツールチップを非表示に
    $("#tooltip").hide();

    // ツールチップ縦位置：アイコンの横位置 - 角丸四角形高さ - 三角形高さ
    $("#tooltip").css(
      "top",
      $(this).offset().top - $("#tooltip").height() - 18
    );

    $('#tooltip').css(
        "left",
        $(this).offset().left - ($("#tooltip").width() - $(this).width())/2
    );

    $("#tooltip").fadeIn();
  },function(){
    $("#tooltip").remove();
  });
});