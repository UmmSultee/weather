
function getCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#present-city");
  let searchInput = document.querySelector("#search-input");
  cityElement.innerHTML = searchInput.value;
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", getCity);
