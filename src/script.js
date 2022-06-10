function formatDate(time) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekDay = weekDays[now.getDay()];
    let currentHour = now.getHours();
    if (currentHour < 10) {
        currentHour = `0${currentHour}`;
    }
    let currentMinutes = now.getMinutes();
    if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`;
    }
    let currentTime = `${currentHour}:${currentMinutes}`;
    return `${weekDay} ${currentTime}`;
}

let currentDate = document.querySelector('#current-date');
let now = new Date();

currentDate.innerHTML = formatDate(now);

// challenge 2

const form = document.querySelector('form');

function displayWeatherCondition(response) {
    document.querySelector('h1').innerHTML = response.data.name;
    document.querySelector('#t').innerHTML = Math.round(response.data.main.temp);
    document.querySelector('#humidity').innerHTML = response.data.main.humidity;
    document.querySelector('#wind').innerHTML = Math.round(response.data.wind.speed);
    document.querySelector('#description').innerHTML = response.data.weather[0].description;
}

function searchCity(city) {
    let apiKey = 'b4e5671cab86d3aadb0d688766b69716';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherCondition);
}

function hadleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector('#search-input').value;
    searchCity(city);
}

form.addEventListener('submit', hadleSubmit);



function searchLocation(position) {
    let apiKey = 'b4e5671cab86d3aadb0d688766b69716';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeatherCondition);
}


function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector('#current-location-button');
currentLocationButton.addEventListener('click', getCurrentLocation);

searchCity('New York');









// function convertToC(event) {
//     event.preventDefault();

//     let temperatureElement = document.querySelector('.t');
//     temperatureElement.innerHTML = 24;
// } 

let temperatureElement = document.querySelector('.t');
// let tempF = document.querySelector('#tempF');
// tempF.addEventListener('click', convertToF);
// let tempC = document.querySelector('#tempC');
// tempC.addEventListener('click', convertToC);

// convert temperature
// function convertToF(event) {
//     event.preventDefault();
//     let temperatureElement = document.querySelector('.t');
//     let temperature = temperatureElement.innerHTML;
//     temperature = Number(temperature);
//     temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
// }


// weather API

// function showTemperature(response) {
//     console.log(response);
// }

// function cityWeather() {
//     let apiKey = 'b4e5671cab86d3aadb0d688766b69716';
//     let searchingCity = document.querySelector('#search-input');
//     let city = searchingCity.value;

//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     axios.get(apiUrl).then(showTemperature);
//     console.log(apiUrl);
// }