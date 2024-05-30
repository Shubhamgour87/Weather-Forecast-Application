const apiKey = "e2da23b3cc2190beae38a4c3aa5afc9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey + "&q=";

const searchBox = document.querySelector(".sb input");
const searchBtn = document.querySelector(".sb button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid={apiKey}');
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    // if(data.weather[0].main == "Clouds"){
    //     // weatherIcon.src = "images/clouds.png";
        
    // }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


// fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key_here');
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));