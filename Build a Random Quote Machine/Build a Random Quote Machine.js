$(document).ready(function () {

    $(".btn_next").on("click", getQuote);
    var content = "Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.";
    var author = "Paul Erdos";

    function getQuote() {
        $.getJSON("https://v1.hitokoto.cn/", function (json) {
            content = json["hitokoto"];
            author = json["from"];

            $(".quote_content").html(content);
            $(".quote_author").html("——" + author);
        });
    }
    getQuote();
    $(".shareweibo").on("click", function () {
        console.log(content + author);
        window.open("http://service.weibo.com/share/share.php?appkey=&title=" + content + "——" + author);
    });

});