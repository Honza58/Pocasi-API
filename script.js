//API počasí - načtení dat a zobrazení na stránce

// HTML prvky pro výpis dat
let paragraphWeather = document.querySelector(".paragraphWeather");
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item7 = document.querySelector(".item7");
let timeGetOfData = document.querySelector(".timeGetOfData"); //čas měření
let item9 = document.querySelector(".item9");
let date = document.querySelector(".date");
const weatherButton = document.getElementById("weatherButton");
let dataList = document.getElementById("citiesList"); // seznam měst pro input
let cityInput = document.querySelector(".cityInput"); // pole pro zadání města

// Při psaní do inputu vyhledáme města (od 2 znaků)
cityInput.addEventListener("input", () => {
  const query = cityInput.value.trim();

  if (query.length < 2) {
    return; // pokud podmínka splněna return ukončí funkci a kód dál nepokračuje
  }
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=cs`;

  fetch(geoUrl)
    .then((response) => {
      return response.json(); //surová odpověď se převádí na json objekt
    })
    .then((geoData) => {
      dataList.innerHTML = "";
      if (!geoData.results || geoData.results.length === 0) {
        return; // dokud podmínka splněna return ukončí funkci a kód dál nepokračuje
      }

      // naplníme seznam měst
      geoData.results.forEach((cities) => {
        const option = document.createElement("option");
        option.value = `${cities.name}, ${cities.country_code}, ${cities.admin1} kraj`;
        dataList.appendChild(option);
      });
    });
});

//  Po kliknutí na tlačítko načteme počasí
weatherButton.addEventListener("click", () => {
  loadWeather();
});
// Deklarace proměnných pro pozdější použití
let itemSunrise;
let itemSunset;

// Funkce -  API načtení dat s open-meteo.com
function loadWeather() {
  // schováme všechny ikony počasí
  const allIcons = document.querySelectorAll("[class^='weather-icon-label-']");
  allIcons.forEach((icons) => {
    icons.classList.add("hidden");
  });

  // vezmeme název města z inputu např: Útěchov, CZ, Pardubický kraj
  const valueCity = cityInput.value.trim();

  const parts = valueCity.split(",").map((p) => {
    return p.trim();
  });

  const cityName = parts[0];
  const countryCode = parts[1];
  const region = parts[2];

  // dotaz na geolokaci města
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=10&language=cs`;

  // vrátí surovou odpověď do geoResponse na základě požadavku geoUrl, jedná se o objekt typu response
  // pomocí.json() převedeme(vypársujeme) z geoResponse ze surové odpovědi JSON objekt(pole results) např: name, latitude, longitude
  // return - vrátí JSON objekt(pole results) do geoData
  fetch(geoUrl)
    .then((geoResponse) => {
      return geoResponse.json();
    })
    // pomocí geoData sestavíme požadavek na předpověď počasí
    .then((geoData) => {
      if (!geoData.results) {
        return;
      }

      // vymažeme slovo kraj
      const cleanRegion = region.replace(" kraj", "");
      // vybereme město dle country_code a kraje
      const result = geoData.results.find((r) => {
        if (r.country_code === countryCode && r.admin1 === cleanRegion) {
          return true;
        } else {
          return false;
        }
      });
      // zastavujeme kód pokud je result false
      if (!result) return;
      // přeneseme do požadavku zeměpisnou šířku a délku
      const { latitude, longitude } = result;

      // dotaz na počasí podle souřadnic
      const urlWeather = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,rain,weather_code,apparent_temperature,precipitation_probability,precipitation,sunshine_duration&latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,rain#current_weather&minutely_15=weather_code`;

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
      item1.textContent = `${itemSunrise.split("T")[1]}`;
      itemSunset = data.daily.sunset[0];
      item2.textContent = `${itemSunset.split("T")[1]}`;
      item3.textContent = `${data.current.apparent_temperature}   C°`;
      item4.textContent = `${data.current.temperature_2m}C°`;
      item5.textContent = `${data.current.rain} mm`;
      item6.textContent = `${data.hourly.precipitation_probability.slice(0, 7)}%`;
      item7.textContent = `${data.current.wind_speed_10m} km/h`;

      // Ćas
      timeGetOfData.textContent = `${data.current.time.split("T")[1]}`;

      // datum
      let [year, month, day] = data.daily.time[0].split("-");
      date.textContent = `${day}. ${month}. ${year}`;

      // zobrazení aktuálního stavu počasí dle čísla kódu z API open-meteo.cz, např: jasno + ikona
      item9.textContent = `${data.current.weather_code}`;
      const specificCodeApi = Number(item9.textContent);
      const displayWeather = document.querySelector(`.weather-icon-label-${specificCodeApi}`);

      // zobrazíme ikonu podle kódu počasí
      if (displayWeather) {
        displayWeather.classList.remove("hidden");
        item9.classList.add("hidden");
      }
    });
  // mažeme input po kliknutí na tlačítko
  cityInput.value = "";
}
