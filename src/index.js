let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
let apiKey = "0e07d3f80c4414708ec095toac29b8a4";

function getCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#present-city");
  let searchInput = document.querySelector("#search-input");
  cityElement.innerHTML = searchInput.value;
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", getCity);

function localTime(date) {
  e.preventDefault();
  let day = document.querySelector("#day")
  day = date.getDay();
  hour = date.getHours();
  minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  let currentDay = days[day];


  
}

localTime();