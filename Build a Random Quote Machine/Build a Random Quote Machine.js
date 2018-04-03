$(document).ready(function(){
    $(".btn_next").on("click",function(){
        getQuote();
    });

    var content="";
    var author="";
    function getQuote(){
        $.getJSON("https://v1.hitokoto.cn/",function(json){
            content=json["hitokoto"];
            author=json["from"];

            $(".quote_content").html(content);
            $(".quote_author").html(author);
        });
    }
});
