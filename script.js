// vytáhneme animované ikony ze souboru
import { currentWeatherIcons } from "./weatherIcons.js";

//API počasí - načtení dat a zobrazení na stránce
// HTML prvky pro výpis current-weather
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
let citySearchInput = document.getElementById("city-search-input"); // pole pro zadání města
const citySearchMessage = document.getElementById("city-search-message");
const regex = /^([^,]+),\s([A-Z]{2}),\s([^,])+\skraj$/;
const location__name = document.querySelector(".location__name");

// Při psaní do inputu vyhledáme město, county_code, název kraje (od 2 znaků)
// Společný kód pro obě stránky, current a weather-forecast
citySearchInput.addEventListener("input", () => {
  const query = citySearchInput.value.trim();

  if (!regex.test(query)) {
    citySearchMessage.textContent = "Neprávný formát";
    citySearchMessage.classList.add("invalid");
    citySearchMessage.classList.remove("valid");
    citySearchSubmit.disabled = true;
  } else {
    citySearchMessage.textContent = "Správný formát";
    citySearchMessage.classList.remove("invalid");
    citySearchMessage.classList.add("valid");
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
        return; // pokud podmínka splněna return ukončí funkci a kód dál nepokračuje
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
  const mode = document.body.dataset.mode;
  if (mode === "current-weather") {
    currentWeather(mode);
  } else if (mode === "7-day-forecast") {
    sevenDayForecast(mode);
  }
});

// Funkce - API načtení dat s open-meteo.com - současné počasí
function currentWeather() {
  // schováme všechny ikony počasí
  const allIcons = document.querySelectorAll("[class^='weather-status_item--']");
  allIcons.forEach((icons) => {
    icons.classList.add("is-hidden");
  });

  // vezmeme název města z inputu např: Útěchov, CZ, Pardubický kraj
  const valueCity1 = citySearchInput.value.trim();

  const parts = valueCity1.split(",").map((p) => {
    return p.trim();
  });

  const cityName1 = parts[0];
  const countryCode1 = parts[1];
  const region1 = parts[2];

  // Zobrazíme město, c-code, kraj v políčku nad daty o počasí
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
    // pomocí geoData1 sestavíme požadavek na předpověď počasí
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

      // načteme si  zeměpisnou šířku a délku
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
      const xxx = data.current;
      console.log("sočasná data", xxx);
      
      // Deklarace proměnných pro pozdější použití
      let itemSunrise;
      let itemSunset;
      // výpis dat na stránku
      itemSunrise = data.daily.sunrise[0];
      weatherDetailsValueSunrise.textContent = `${itemSunrise.split("T")[1]}`;
      itemSunset = data.daily.sunset[0];
      weatherDetailsValueSunset.textContent = `${itemSunset.split("T")[1]}`;
      weatherDetailsValuesFeelsLike.textContent = `${data.current.apparent_temperature}  C°`;
      weatherDetailsValuesTemperature.textContent = `${data.current.temperature_2m} C°`;
      weatherDetailsValuesRain.textContent = `${data.current.rain} mm`;
      weatherDetailsValuesPrecipitation7h.textContent = `${data.hourly.precipitation_probability.slice(0, 7).join(" | ")} %`;
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

// stránka - weather-forecast

// days of week
const weatherForecastMonday = document.getElementById("weather-forecast__monday");
const weatherForecastTuesday = document.getElementById("weather-forecast__tuesday");
const weatherForecastWednesday = document.getElementById("weather-forecast__wednesday");
const weatherForecastThursday = document.getElementById("weather-forecast__thursday");
const weatherForecastFriday = document.getElementById("weather-forecast__friday");
const weatherForecastSaturday = document.getElementById("weather-forecast__saturday");
const weatherForecastSunday = document.getElementById("weather-forecast__sunday");
// date
const weatherforecastDateMonday = document.getElementById("weather-forecast__date--monday");
const weatherforecastDateTuesday = document.getElementById("weather-forecast__date--tuesday");
const weatherforecastDateWednesday = document.getElementById("weather-forecast__date--wednesday");
const weatherforecastDateThursday = document.getElementById("weather-forecast__date--thursday");
const weatherforecastDateFriday = document.getElementById("weather-forecast__date--friday");
const weatherforecastDateSaturday = document.getElementById("weather-forecast__date--saturday");
const weatherforecastDateSunday = document.getElementById("weather-forecast__date--sunday");

//Icons
const weatherForecastIconMonday = document.getElementById("weather-forecast__icon--monday");
const weatherForecastIconTuesday = document.getElementById("weather-forecast__icon--tuesday");
const weatherForecastIconWedenesday = document.getElementById("weather-forecast__icon--wednesday");
const weatherForecastIconThursday = document.getElementById("weather-forecast__icon--thursday");
const weatherForecastIconFriday = document.getElementById("weather-forecast__icon--friday");
const weatherForecastIconSaturday = document.getElementById("weather-forecast__icon--saturday");
const weatherForecastIconSunday = document.getElementById("weather-forecast__icon--sunday");

// teplota min
const weatherForecastTemperatureMinMonday = document.getElementById("weather-forecast__temperature-min--monday");
const weatherForecastTemperatureMinTuesday = document.getElementById("weather-forecast__temperature-min--tuesday");
const weatherForecastTemperatureMinWednesday = document.getElementById("weather-forecast__temperature-min--wednesday");
const weatherForecastTemperatureMinThursday = document.getElementById("weather-forecast__temperature-min--thursday");
const weatherForecastTemperatureMinFriday = document.getElementById("weather-forecast__temperature-min--friday");
const weatherForecastTemperatureMinSaturday = document.getElementById("weather-forecast__temperature-min--saturday");
const weatherForecastTemperatureMinSunday = document.getElementById("weather-forecast__temperature-min--sunday");

// teplota max
const weatherForecastTemperatureMaxMonday = document.getElementById("weather-forecast__temperature-max--monday");
const weatherForecastTemperatureMaxTuesday = document.getElementById("weather-forecast__temperature-max--tuesday");
const weatherForecastTemperatureMaxWednesday = document.getElementById("weather-forecast__temperature-max--wednesday");
const weatherForecastTemperatureMaxThursday = document.getElementById("weather-forecast__temperature-max--thursday");
const weatherForecastTemperatureMaxFriday = document.getElementById("weather-forecast__temperature-max--friday");
const weatherForecastTemperatureMaxSaturday = document.getElementById("weather-forecast__temperature-max--saturday");
const weatherForecastTemperatureMaxSunday = document.getElementById("weather-forecast__temperature-max--sunday");

// celkové množství srážek za den
const weatherForecastPrecipitationSumMonday = document.getElementById("weather-forecast__precipitation-sum--monday");
const weatherForecastPrecipitationSumTuesday = document.getElementById("weather-forecast__precipitation-sum--tuesday");
const weatherForecastPrecipitationSumWednesday = document.getElementById("weather-forecast__precipitation-sum--wednesday");
const weatherForecastPrecipitationSumThursday = document.getElementById("weather-forecast__precipitation-sum--thursday");
const weatherForecastPrecipitationSumFriday = document.getElementById("weather-forecast__precipitation-sum--friday");
const weatherForecastPrecipitationSumSaturday = document.getElementById("weather-forecast__precipitation-sum--saturday");
const weatherForecastPrecipitationSumSunday = document.getElementById("weather-forecast__precipitation-sum--sunday");

// wind - speed
const weatherForecastWindSpeedMonday = document.getElementById("weather-forecast__wind--monday");
const weatherForecastWindSpeedTuesday = document.getElementById("weather-forecast__wind--tuesday");
const weatherForecastWindSpeedWednesday = document.getElementById("weather-forecast__wind--wednesday");
const weatherForecastWindSpeedThursday = document.getElementById("weather-forecast__wind--thursday");
const weatherForecastWindSpeedFriday = document.getElementById("weather-forecast__wind--friday");
const weatherForecastWindSpeedSaturday = document.getElementById("weather-forecast__wind--saturday");
const weatherForecastWindSpeedSunday = document.getElementById("weather-forecast__wind--sunday");

// sunrise
const weatherForecastSunriseMonday = document.getElementById("weather-forecast__sunrise--monday");
const weatherForecastSunriseTuesday = document.getElementById("weather-forecast__sunrise--tuesday");
const weatherForecastSunriseWednesday = document.getElementById("weather-forecast__sunrise--wednesday");
const weatherForecastSunriseThursday = document.getElementById("weather-forecast__sunrise--thursday");
const weatherForecastSunriseFriday = document.getElementById("weather-forecast__sunrise--friday");
const weatherForecastSunriseSaturday = document.getElementById("weather-forecast__sunrise--saturday");
const weatherForecastSunriseSunday = document.getElementById("weather-forecast__sunrise--sunday");

// sunset
const weatherForecastSunsetMonday = document.getElementById("weather-forecast__sunset--monday");
const weatherForecastSunsetTuesday = document.getElementById("weather-forecast__sunset--tuesday");
const weatherForecastSunsetWednesday = document.getElementById("weather-forecast__sunset--wednesday");
const weatherForecastSunsetThursday = document.getElementById("weather-forecast__sunset--thursday");
const weatherForecastSunsetFriday = document.getElementById("weather-forecast__sunset--friday");
const weatherForecastSunsetSaturday = document.getElementById("weather-forecast__sunset--saturday");
const weatherForecastSunsetSunday = document.getElementById("weather-forecast__sunset--sunday");

// Funkce - načteme data s open-meteo.com - předpověď počasí na 7 dní
function sevenDayForecast() {
  // vezmeme název města z inputu např: Útěchov, CZ, Pardubický kraj
  const valueCityForecast = citySearchInput.value.trim();
  const partsForecast = valueCityForecast.split(",").map((p) => {
    return p.trim();
  });

  const cityNameForecast = partsForecast[0];
  const countryCodeForecast = partsForecast[1];
  const regionForecast = partsForecast[2];

  // Zobrazíme město, c-code, kraj v políčku nad daty o počasí
  location__name.textContent = `${cityNameForecast.trim()}, ${countryCodeForecast.trim()}, ${regionForecast.trim()}`;

  // dotaz na geolokaci města
  const geoUrlForecast = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityNameForecast)}&count=10&language=cs`;

  fetch(geoUrlForecast)
    .then((geoResponseForecast) => {
      return geoResponseForecast.json();
    })
    .then((geoDataForecast) => {
      if (!geoDataForecast.results) {
        return;
      }

      // vymažeme slovo kraj
      const cleanRegionForecast = regionForecast.replace(" kraj", "");

      //vybereme město dle country_code a kraje
      const resultForecast = geoDataForecast.results.find((r) => {
        if (r.country_code === countryCodeForecast && r.admin1 === cleanRegionForecast) {
          return true;
        } else {
          return false;
        }
      });
      // zastavujeme kód pokud je result false
      if (!resultForecast) return;

      // načteme si  zeměpisnou šířku a délku
      const { latitude, longitude } = resultForecast;

      const urlWeatherForecast = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_sum&hourly=precipitation_probability&current=weather_code`;

      return fetch(urlWeatherForecast);
    })

    .then((weatherForecastResponse) => {
      return weatherForecastResponse.json();
    })
    .then((weatherForecastData) => {
      const dailyResult = weatherForecastData.daily;
      console.log(dailyResult);

      dailyResult.time.forEach((day, index) => {
        const todayIndex = (new Date().getDay() + 6) % 7;
        console.log("todayIndex", todayIndex);

        const htmlIndex = (todayIndex + index) % 7;
        console.log("htmlIndex", htmlIndex);

        const dayNames = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];

        let dayNameElements = [
          weatherForecastMonday,
          weatherForecastTuesday,
          weatherForecastWednesday,
          weatherForecastThursday,
          weatherForecastFriday,
          weatherForecastSaturday,
          weatherForecastSunday,
        ];
        dayNameElements[htmlIndex].textContent = dayNames[(todayIndex + index) % 7];
        console.log(dayNames[(todayIndex + index) % 7]);

        let date = [
          weatherforecastDateMonday,
          weatherforecastDateTuesday,
          weatherforecastDateWednesday,
          weatherforecastDateThursday,
          weatherforecastDateFriday,
          weatherforecastDateSaturday,
          weatherforecastDateSunday,
        ];
        date[htmlIndex].textContent = dailyResult.time[index].split("-").reverse().join(".");

        // icons

        let iconsDays = [
          weatherForecastIconMonday,
          weatherForecastIconTuesday,
          weatherForecastIconWedenesday,
          weatherForecastIconThursday,
          weatherForecastIconFriday,
          weatherForecastIconSaturday,
          weatherForecastIconSunday,
        ];
        // iconsDays[htmlIndex].innerHTML = dailyResult.weather_code[index] //jen číselný kód počasí
        const forecastWeatherCode = dailyResult.weather_code[index];
        console.log(forecastWeatherCode);
        
        const iconContainer = iconsDays[htmlIndex];
        iconContainer.innerHTML = "";
        const weatherForDay = currentWeatherIcons[forecastWeatherCode];
        if (weatherForDay && weatherForDay.icon) {
          iconContainer.innerHTML = weatherForDay.icon;
        } else {
          iconContainer.textContent = forecastWeatherCode;
        }

        let tempMinDays = [
          weatherForecastTemperatureMinMonday,
          weatherForecastTemperatureMinTuesday,
          weatherForecastTemperatureMinWednesday,
          weatherForecastTemperatureMinThursday,
          weatherForecastTemperatureMinFriday,
          weatherForecastTemperatureMinSaturday,
          weatherForecastTemperatureMinSunday,
        ];
        tempMinDays[htmlIndex].textContent = dailyResult.temperature_2m_min[index];

        let tempMaxDays = [
          weatherForecastTemperatureMaxMonday,
          weatherForecastTemperatureMaxTuesday,
          weatherForecastTemperatureMaxWednesday,
          weatherForecastTemperatureMaxThursday,
          weatherForecastTemperatureMaxFriday,
          weatherForecastTemperatureMaxSaturday,
          weatherForecastTemperatureMaxSunday,
        ];
        tempMaxDays[htmlIndex].textContent = dailyResult.temperature_2m_max[index];

        let precSum = [
          weatherForecastPrecipitationSumMonday,
          weatherForecastPrecipitationSumTuesday,
          weatherForecastPrecipitationSumWednesday,
          weatherForecastPrecipitationSumThursday,
          weatherForecastPrecipitationSumFriday,
          weatherForecastPrecipitationSumSaturday,
          weatherForecastPrecipitationSumSunday,
        ];
        precSum[htmlIndex].textContent = dailyResult.precipitation_sum[index];

        let windSpeed = [
          weatherForecastWindSpeedMonday,
          weatherForecastWindSpeedTuesday,
          weatherForecastWindSpeedWednesday,
          weatherForecastWindSpeedThursday,
          weatherForecastWindSpeedFriday,
          weatherForecastWindSpeedSaturday,
          weatherForecastWindSpeedSunday,
        ];
        windSpeed[htmlIndex].textContent = dailyResult.wind_speed_10m_max[index];

        let sunrise = [
          weatherForecastSunriseMonday,
          weatherForecastSunriseTuesday,
          weatherForecastSunriseWednesday,
          weatherForecastSunriseThursday,
          weatherForecastSunriseFriday,
          weatherForecastSunriseSaturday,
          weatherForecastSunriseSunday,
        ];
        sunrise[htmlIndex].textContent = dailyResult.sunrise[index].split("T")[1];

        let sunset = [
          weatherForecastSunsetMonday,
          weatherForecastSunsetTuesday,
          weatherForecastSunsetWednesday,
          weatherForecastSunsetThursday,
          weatherForecastSunsetFriday,
          weatherForecastSunsetSaturday,
          weatherForecastSunsetSunday,
        ];
        sunset[htmlIndex].textContent = dailyResult.sunset[index].split("T")[1];
      });
    });
  // mažeme input a hlášku po kliknutí na tlačítko
  citySearchInput.value = "";
  citySearchMessage.textContent = "";
}
