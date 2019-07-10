function getWeather() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var weatherJson = JSON.parse(this.responseText);
      showWeather(weatherJson);
    }
  };
  xhttp.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?id=1221740&APPID=122cfa14c1b3793a3d2cb2a585d831b6",
    true
  );
  xhttp.send();
}

function showWeather(weatherJson) {
  document.getElementById("w-name").innerHTML = weatherJson.name;
  document.getElementById("w-degree").innerHTML =
    weatherJson.main.temp - 273.15;
  document.getElementById("w-description").innerHTML =
    weatherJson.weather[0].description;
  document.getElementById("w-updated-time").innerHTML = getDate(weatherJson.dt);
  document.getElementById("w-wind").innerHTML = weatherJson.wind.speed;
  document.getElementById("w-cloudiness").innerHTML = weatherJson.clouds.all;
  document.getElementById("w-pressure").innerHTML = weatherJson.main.pressure;
  document.getElementById("w-humidity").innerHTML = weatherJson.main.humidity;
  document.getElementById("w-sunrise").innerHTML = getDate(
    weatherJson.sys.sunrise
  );
  document.getElementById("w-sunset").innerHTML = getDate(
    weatherJson.sys.sunset
  );
  document.getElementById("w-icon").src =
    "https://openweathermap.org/img/w/" + weatherJson.weather[0].icon + ".png";
}

function getDate(timestamp) {
  var date = new Date(timestamp * 1000);
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
