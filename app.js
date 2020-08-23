// key: 2403245cedc9a26c9759bdc7c57c5e98

function getWeather() {
    // assigning HTML markup ids to variables
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    // variables for url and API key
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "63bd4a79d8deb6696b1edca06dff723f";
    // call geolocation web API. ask to see current location
    navigator.geolocation.getCurrentPosition(success, error);
    
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      var wicon = document.getElementById("wicon");
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          temperature.innerHTML = temp + "° F";
          //trying to get icon
          var iconcode = data.weather[0].icon;
          var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"; 
          //input image to img tag in html doc 
          if (wicon.getAttribute("src") == null) {
            wicon.src = iconurl;
          }
          
          location.innerHTML =
            data.name + " (" + latitude + "°, " + longitude + "°)";
          description.innerHTML = data.weather[0].main;
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
    
  }
  
  getWeather();