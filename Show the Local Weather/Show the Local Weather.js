$(document).ready(function(){
    
    getLocation();
    
});

function getLocation(){
    $.getJSON("https://ipapi.co/json/ ",function(data){
        
    var city=data.city;
        var lat=data.latitude;
        var lon=data.longitude;
        $("#city").html(city);
        $("#lat").html(lat);
        $("#lon").html(lon);
        getWeather(lat,lon);
    });

}

function getWeather(lat,lon){
    var api="http://v.juhe.cn/weather/index?format=1";
    var key="440c003faa7e28e38f28ae7cefea7022";
    var url=api+"&lon="+lon+"&lat="+lat+"&key="+key;
    $.getJSON(url,function(data){
        $("#ntime").html(data.sk.time);
        $("#ntemp").html(data.sk.temp);
        $("#nwindd").html(data.sk.wind_direction);
        $("#nwinds").html(data.sk.wind_strength);
        $("#nhumidity").html(data.sk.humidity);
    });

    var api="https://api.seniverse.com/v3/weather/now.json?unit=c"
    var key="yzepwys0yd4mey7m";
    var url=api+"&key="+key+"&location="+city;
    $.getJSON(url,function(data){
        var weather=data.results[0];
        $("#ntime").html(weather.last_update);
        $("#ntemp").html(weather.now.temperature);
        $("#nwindd").html(weather.now.wind_direction);
        $("#nwinds").html(weather.now.wind_scale);
        $("#nhumidity").html(weather.now.humidity);
    });

    var api="https://fcc-weather-api.glitch.me/api/current?";
    var url=api+"lon="+lon+"&lat="+lat;
    $.getJSON(url,function(data){
        $("#ntime").html(data.weather[0].main);
        $("#ntep").html(data.main.temp);
        $("#nwindd").html(data.sk.wind_direction);
        $("#nwinds").html(data.sk.wind_strength);
        $("#nhumidity").html(data.sk.humidity);
    });
}

