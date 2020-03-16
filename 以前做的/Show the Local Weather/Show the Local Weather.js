$(document).ready(function () {
    getLocation();
});

function getLocation() {
    $.getJSON("https://ipapi.co/json/ ", function (data) {

        var city = data.city;
        var lat = data.latitude;
        var lon = data.longitude;
        $("#city").html(city);
        $("#lat").html(lat);
        $("#lon").html(lon);
        getWeather(lat, lon);
    });
}

function getWeather(lat, lon) {
    var api = "https://fcc-weather-api.glitch.me/api/current?";
    var url = api + "lon=" + lon + "&lat=" + lat;
    $.getJSON(url, function (data) {
        $("#ntemp").html(data.main.temp);
        $("#nweather").html(data.weather[0].main + "<img src=" + data.weather[0].icon + ">");
        $("#nwinds").html(data.wind.speed);
        $("#nhumidity").html(data.main.humidity);
    });
}