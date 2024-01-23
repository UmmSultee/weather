function refreshWeather(response) {
  let cityElement = document.querySelector("#present-city");
  let temperatureElement = document.querySelector(".temperature");
  let temperature = response.data.temperature.current;
  let icon = document.querySelector(".icon");
  let unit = document.querySelector(".unit");
  let humidity = document.querySelector("#humodity");
  let wind = document.querySelector("#wind");
  let description = document.querySelector("#description");
  let localTimeElement = document.querySelector("#day");
  let dateElement = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}"?>`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  description.innerHTML = response.data.condition.description;
  localTimeElement.innerHTML = localTime(date);
};

function localTime(date) {
  let day = document.querySelector("#day");
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
    "Saturday",
  ];
  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentDay = days[day];
  return `${currentDay} ${hour}:${minutes}`;
};

function getCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  let apiKey = "0e07d3f80c4414708ec095toac29b8a4";
  axios.get(apiUrl).then(refreshWeather);
};

function searchEvent(event) {
  e.preventDefault();
  let searchInput = document.querySelector("#search-input");
  getCity(searchInput.value);
};

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchEvent);

getCity("Kano");
