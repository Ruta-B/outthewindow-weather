function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
/*alert("hello");*/

function getWeather(response) {
  let currentTemp = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#current-city");
  let temperature = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-value");
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  currentTemp.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#location-city");

  let city = searchInputElement.value;
  let apiKey = "a7oe402d391da40bfcfe02337et07b50";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

let searchForm = document.querySelector("#submit-form");
searchForm.addEventListener("submit", search);
