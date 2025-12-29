//API počasí - načtení dat a zobrazení na stránce

// HTML prvky pro výpis dat
let paragraphWeather = document.querySelector(".paragraphWeather");
let weatherDetailsValueSunrise = document.querySelector(".weather-details__value--sunrise");
let weatherDetailsValueSunset = document.querySelector(".weather-details__value--sunset");
let weatherDetailsValuesFeelsLike = document.querySelector(".weather-details__value--feels-like");
let weatherDetailsValuesTemperature = document.querySelector(".weather-details__value--temperature");
let weatherDetailsValuesRain = document.querySelector(".weather-details__value--rain");
let weatherDetailsValuesPrecipitation7h = document.querySelector(".weather-details__value--precipitation-7h");
let weatherDetailsValuesWindSpeed = document.querySelector(".weather-details__value--wind-speed");
let weatherDetailsTime = document.querySelector(".current-weather__time"); //čas měření
let weatherDetailsValueExtra = document.querySelector(".weather-details__value--extra");
let currentWeatherDate = document.querySelector(".current-weather__date");
const citySearchSubmit = document.getElementById("city-search-submit");
let citySearchList = document.getElementById("city-search-list"); // seznam měst pro input
let citySearchInput = document.querySelector(".city-search__input"); // pole pro zadání města
const citySearchMessage = document.getElementById("city-search-message");
const regex = /^([^,]+),\s([A-Z]{2}),\s([^,])+\skraj$/;
const location__name = document.querySelector(".location__name");

// Při psaní do inputu vyhledáme město, county_code, název kraje (od 2 znaků)
citySearchInput.addEventListener("input", () => {
  const query = citySearchInput.value.trim();

  if (!regex.test(query)) {
    citySearchMessage.textContent = "Neprávný formát";
    citySearchMessage.classList.add("invalid");
    citySearchMessage.classList.remove("valid");
    citySearchSubmit.classList.add("weatherButton1");
    citySearchSubmit.disabled = true;
  } else {
    citySearchMessage.textContent = "Správný formát";
    citySearchMessage.classList.remove("invalid");
    citySearchMessage.classList.add("valid");
    citySearchSubmit.classList.add("weatherButton1");
    citySearchSubmit.disabled = false;
  }

  if (query.length < 2) {
    return; // pokud podmínka splněna return ukončí funkci a kód dál nepokračuje
  }
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=cs`;

  fetch(geoUrl)
    .then((response) => {
      return response.json(); //surová odpověď se převádí na json objekt
    })
    .then((geoData) => {
      citySearchList.innerHTML = "";
      if (!geoData.results || geoData.results.length === 0) {
        return; // dokud podmínka splněna return ukončí funkci a kód dál nepokračuje
      }

      // naplníme seznam měst
      geoData.results.forEach((cities) => {
        const option = document.createElement("option");

        option.value = `${cities.name}, ${cities.country_code}, ${cities.admin1} kraj`;
        citySearchList.appendChild(option);
      });
    });
});

//  Po kliknutí na tlačítko načteme počasí
citySearchSubmit.addEventListener("click", () => {
  loadWeather();
});

// Deklarace proměnných pro pozdější použití
let itemSunrise;
let itemSunset;

// Funkce -  API načtení dat s open-meteo.com
function loadWeather() {
  // schováme všechny ikony počasí
  const allIcons = document.querySelectorAll("[class^='weather-status_item--']");
  allIcons.forEach((icons) => {
    icons.classList.add("is-hidden");
  });

  // Odstraníme margin-bottom
  // citySearchSubmit.classList.remove("weatherButton1");

  // vezmeme název města z inputu např: Útěchov, CZ, Pardubický kraj
  const valueCity1 = citySearchInput.value.trim();

  const parts = valueCity1.split(",").map((p) => {
    return p.trim();
  });

  const cityName1 = parts[0];
  const countryCode1 = parts[1];
  const region1 = parts[2];

  // Zobrazíme město c-code, kraj v políčku nad daty o počasí
  location__name.textContent = `${cityName1.trim()}, ${countryCode1.trim()}, ${region1.trim()}`;

  // dotaz na geolokaci města
  const geoUrl1 = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName1)}&count=10&language=cs`;

  // vrátí surovou odpověď do geoResponse na základě požadavku geoUrl, jedná se o objekt typu response
  // pomocí.json() převedeme(vypársujeme) z geoResponse ze surové odpovědi JSON objekt(pole results) např: name, latitude, longitude
  // return - vrátí JSON objekt(pole results) do geoData
  fetch(geoUrl1)
    .then((geoResponse1) => {
      return geoResponse1.json();
    })
    // pomocí geoData sestavíme požadavek na předpověď počasí
    .then((geoData1) => {
      if (!geoData1.results) {
        return;
      }

      // vymažeme slovo kraj
      const cleanRegion = region1.replace(" kraj", "");
      // vybereme město dle country_code a kraje
      const result1 = geoData1.results.find((r) => {
        if (r.country_code === countryCode1 && r.admin1 === cleanRegion) {
          return true;
        } else {
          return false;
        }
      });
      // zastavujeme kód pokud je result false
      if (!result1) return;
      // přeneseme do požadavku zeměpisnou šířku a délku
      const { latitude, longitude } = result1;

      // dotaz na počasí podle souřadnic
      const urlWeather = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,rain,weather_code,apparent_temperature,precipitation_probability,precipitation,sunshine_duration&latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset,temperature_2m_mean&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,rain#current_weather&minutely_15=weather_code`;

      return fetch(urlWeather);
    })
    // vrátí surovou odpověď do weatherResponse na základě požadavku urlWeather, jedná se o objekt typu response
    // pomocí.json() převedeme(vypársujeme) z weatherResponse ze surové odpovědi JSON objekt(pole results) např: name, latitude, longitude
    .then((weatherResponse) => {
      return weatherResponse.json();
    })
    //konkrétní vypársovaná data o počasí
    .then((data) => {
      // výpis dat na stránku
      itemSunrise = data.daily.sunrise[0];
      weatherDetailsValueSunrise.textContent = `${itemSunrise.split("T")[1]}`;
      itemSunset = data.daily.sunset[0];
      weatherDetailsValueSunset.textContent = `${itemSunset.split("T")[1]}`;
      weatherDetailsValuesFeelsLike.textContent = `${data.current.apparent_temperature}   C°`;
      weatherDetailsValuesTemperature.textContent = `${data.current.temperature_2m}C°`;
      weatherDetailsValuesRain.textContent = `${data.current.rain} mm`;
      weatherDetailsValuesPrecipitation7h.textContent = `${data.hourly.precipitation_probability.slice(0, 7)}%`;
      weatherDetailsValuesWindSpeed.textContent = `${data.current.wind_speed_10m} km/h`;

      // Ćas
      weatherDetailsTime.textContent = `${data.current.time.split("T")[1]}`;

      // datum
      let [year, month, day] = data.daily.time[0].split("-");
      currentWeatherDate.textContent = `${day}. ${month}. ${year}`;

      // zobrazení aktuálního stavu počasí dle čísla kódu z API open-meteo.cz, např: jasno + ikona
      weatherDetailsValueExtra.textContent = `${data.current.weather_code}`;

      const specificCodeApi = Number(weatherDetailsValueExtra.textContent);
      const displayWeather = document.querySelector(`.weather-status_item--${specificCodeApi}`);

      // zobrazíme ikonu podle kódu počasí
      if (displayWeather) {
        displayWeather.classList.remove("is-hidden");
        weatherDetailsValueExtra.classList.add("is-hidden");
      }
    });

  // mažeme input a hlášku po kliknutí na tlačítko
  citySearchInput.value = "";
  citySearchMessage.textContent = "";
}
