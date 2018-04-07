$(document).ready(function(){
    getWeather();
});

function getWeather(){
    var ip="";
    var city="";
    $.getJSON("https://ipinfo.io",function(data){
        ip=data.ip;
        city=data.city;
    });
    $.getJSON("http://v.juhe.cn/weather/index?ip="+ip+"&key=440c003faa7e28e38f28ae7cefea7022",function(data){
        $("#ntime").html(data.sk.time);
        $("#ntemp").html(data.sk.temp);
        $("#nwindd").html(data.sk.wind_direction);
        $("#nwinds").html(data.sk.wind_strength);
        $("#nhumidity").html(data.sk.humidity);
    });
}