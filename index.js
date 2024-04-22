function displyWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.temperature.current;
    
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
}

 
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit",handlesearchsubmit);