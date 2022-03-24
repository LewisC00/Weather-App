let weather = {
    "apiKey": "be444151102550bef145f88b090acdb4",
    FetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + 
            city + 
            "&appid=" + 
            this.apiKey
            + "&units=metric"
        ).then((res) => res.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " m/s";
        document.querySelector(".description").innerText = description;
        document.body.style.backgroundImage = "url(https://source.unsplash.com/1920x1080/?" + name +")";
    },
    search: function(){
        this.FetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        weather.search();
    }
})
