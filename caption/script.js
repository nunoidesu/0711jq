$(function(){

    $("li").append("<div></div>");

    //
    $("div").each(function(){
        $(this).html(
            "<p>"+$(this).parent().children("img").attr("alt")+"</p>"
        );
    });

    //li要素をマウスオーバー
    ("li").hover(function(){
        //
        $(this)
        .children("div")
        .stop()
        .fadeIn(300);

    $(this)
        .children("div")
        .children("p")
        .stop()
        .animate({"top":0},300);
    },function(){
        $(this).children("div").stop().fadeout(300);

    $(this)
    .children("div")
    .children("p")
    .stop()
    .animate({"top":"10px"},300);
    });
    
});