function displyWeather(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
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