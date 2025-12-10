//API - počasí
//Získání dat o počasí a uložení do proměnné

//načtení proměnných
let paragraphWeather = document.querySelector(".paragraphWeather");
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item7 = document.querySelector(".item7");
let timeGetOfData = document.querySelector(".timeGetOfData");
let item9 = document.querySelector(".item9");
let date = document.querySelector(".date");
const weatherButton = document.getElementById("weatherButton");

// akce po kliknutí=funkce loadWeather
weatherButton.addEventListener("click", () => {
  loadWeather();
});
// Deklarace proměnných pro pozdější použití
let itemSunrise;
let itemSunset;
let itemLastTime;
let defaultDate;
let reverseDate;

// API načtení dat s open-meteo.com
function loadWeather() {
  // ukrytí všech ikon počasí
  const allIcons = document.querySelectorAll("[class^='weather-icon-label-']");
  allIcons.forEach((icons) => {
    icons.classList.add("hidden");
  });

  // načtení hodnoty z inputu
  const cityInput = document.querySelector(".cityInput").value;

  //url zadaného města s daty
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput)}&count=1&language=cs`;
  // vrátí odpověď do geoResponse na základě požadavku geoUrl
  // return-přečte tělo odpovědi pomocí.json() a vrátí tělo odpovědi do geoData
  fetch(geoUrl)
    .then((geoResponse) => {
      return geoResponse.json();
    })
    // geoData vytáhne souřadnice a vloží do proměnné urlWeather
    // fetch(urlWeather) vyšle požadavek a odpověď se uloží do weatherResponse
    .then((geoData) => {
      const { latitude, longitude } = geoData.results[0];
      const urlWeather = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,rain,weather_code,apparent_temperature,precipitation_probability,precipitation,sunshine_duration&latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,rain#current_weather&minutely_15=weather_code`;

      return fetch(urlWeather);
    })
    // return-přečte tělo odpovědi pomocí json() a vrátí tělo odpovědi do data
    //už jde o konkrétní data o počasí!!!
    .then((weatherResponse) => {
      return weatherResponse.json();
    })
    //konkrétní data o počasí
    .then((data) => {
      // zobrazení na stránce
      itemSunrise = data.daily.sunrise[0];
      item1.textContent = `${itemSunrise.split("T")[1]}`;
      itemSunset = data.daily.sunset[0];
      item2.textContent = `${itemSunset.split("T")[1]}`;
      item3.textContent = `${data.current.apparent_temperature}   C°`;
      item4.textContent = `${data.current.temperature_2m}C°`;
      item5.textContent = `${data.current.rain} mm`;
      item6.textContent = `${data.hourly.precipitation_probability.slice(0, 7)}%`;
      item7.textContent = `${data.current.wind_speed_10m} km/h`;

      // Ćas
      itemLastTime = data.current.time;
      timeGetOfData.textContent = `${itemLastTime.split("T")[1]}`;

      // datum
      defaultDate = `${data.daily.time[0]}`;
      let [year, month, day] = defaultDate.split("-");
      reverseDate = `${day}. ${month}. ${year}`;
      date.textContent = reverseDate;

      // zobrazení aktuálního stavu počasí dle čísla kódu z API open-meteo.cz, např: jasno + ikona
      item9.textContent = `${data.current.weather_code}`;
      const specificCodeApi = Number(item9.textContent);
      const displayWeather = document.querySelector(`.weather-icon-label-${specificCodeApi}`);

      //zobrazuje stav počasí pomocí ikony s textem v pravo nahoře: např: jasno.
      // item9.classList.... ukrývá číslo získané pomocí API
      if (displayWeather) {
        displayWeather.classList.remove("hidden");
        item9.classList.add("hidden");
      }
    });
}
