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

/*alert("hello");*/

function getWeather(response) {
  let currentTemp = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#current-city");
  let temperature = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-value");
  let windSpeedElement = document.querySelector("#wind-speed");
  let currentDateELement = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);
  currentDateELement.innerHTML = formatDate(date);
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h `;
  humidityElement.innerHTML = `${response.data.temperature.humidity} % `;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  currentTemp.innerHTML = temperature;
}

function search(city) {
  let apiKey = "a7oe402d391da40bfcfe02337et07b50";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

function getSearchInput(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#location-city");
  search(searchInputElement.value);
}

let searchForm = document.querySelector("#submit-form");
searchForm.addEventListener("submit", getSearchInput);
search("Stockholm");
