function displyWeather(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    let timeElement = document.querySelector("#time");
    let date = new Date (response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);
    let iconElement = document.querySelector("#icons");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}


function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];
    
    if( minutes < 10) {
        minutes = `0{minutes}`
    }

    return  `${day} ${hours}:${minutes}`;
}



function searchingCity(city) {
    let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displyWeather);
    }
    


function handlesearchsubmit(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let formElement = document.querySelector("#search-form-input");
    cityElement.innerHTML = formElement.value;
    searchingCity(formElement.value);
}

 
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit",handlesearchsubmit);



function displayForcast() {
let forcastElement = document.querySelector("#forcast");


let days = ["Sun", "Mon", "Tue", "Wed", "Thu"];
let forcastHtml = "";

days.forEach(function (day) {
forcastHtml =
forcastHtml + 
 `
 <div class="weater-app-js">
 <div class="weather-th">${day}</div>
<img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" width="37" />
<div class="weather-fotcast">
<span class="weather-app-min"> 13°</span><span class="weather-app-max"> 16°</span></div>
</div>
</div>
    `;
  });

forcastElement.innerHTML = forcastHtml;
}

displayForcast();