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
  //použije se jako dotaz n API open-meteo
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput)}&count=10&language=cs&country=cz`;
  console.log("geoUrl", geoUrl);

  // vrátí surovou odpověď do geoResponse na základě požadavku geoUrl, jedná se o objekt typu response
  // pomocí.json() převedeme(vypársujeme) z geoResponse ze surové odpovědi JSON objekt(pole results) např: name, latitude, longitude
  // return - vrátí JSON objekt(pole results) do geoData
  fetch(geoUrl)
    .then((geoResponse) => {
      console.log("geoResponse", geoResponse);

      return geoResponse.json();
    })
    // pomocí geoData sestavíme požadavek na předpověď počasí
    // fetch(urlWeather) vyšle požadavek a odpověď se uloží do weatherResponse
    .then((geoData) => {
      console.log("geoData", geoData);

      // const geoData1 = geoData.results.find((mestoCz) => mestoCz.country_code === "CZ");
      // console.log("geoData1", geoData1);

      const { latitude, longitude } = geoData.results[0];
      console.log("latitude,longtitude", latitude, longitude);
      
      const urlWeather = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,rain,weather_code,apparent_temperature,precipitation_probability,precipitation,sunshine_duration&latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,rain#current_weather&minutely_15=weather_code`;
      console.log("urlWeather", urlWeather);

      return fetch(urlWeather);
    })
    // vrátí surovou odpověď do weatherResponse na základě požadavku urlWeather, jedná se o objekt typu response
    // pomocí.json() převedeme(vypársujeme) z weatherResponse ze surové odpovědi JSON objekt(pole results) např: name, latitude, longitude
    .then((weatherResponse) => {
      console.log("weatherResponse", weatherResponse);

      return weatherResponse.json();
    })
    //konkrétní vypársovaná data o počasí
    .then((data) => {
      console.log("data", data);

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
