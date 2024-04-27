function updateTime(event) {
  let stockholmDate = moment
    .tz("Europe/Stockholm")
    .format("dddd, MMMM Do YYYY");
  let stockholmDateElement = document.querySelector("#stockholm-date");
  let stockholmTime = moment
    .tz("Europe/Stockholm")
    .format("h:mm:ss [<small>]A[</small>]");
  let StockholmTimeElement = document.querySelector("#stockholm-time");

  stockholmDateElement.innerHTML = stockholmDate;
  StockholmTimeElement.innerHTML = stockholmTime;

  let newyorkDate = moment.tz("America/New_York").format("dddd, MMMM Do YYYY");
  let newyorkDateElement = document.querySelector("#newyork-date");
  let newyorkTime = moment
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");
  let newyorkTimeElement = document.querySelector("#newyork-time");

  newyorkDateElement.innerHTML = newyorkDate;
  newyorkTimeElement.innerHTML = newyorkTime;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName;
  if (cityTimeZone.indexOf("/") === -1) {
    cityName = cityTimeZone;
  } else {
    cityName = cityTimeZone.replace("_", " ").split("/")[1];
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
      <div class="city-container">
        <div>
          <h2>${cityName}</h2>
          <div class="date" id="stockholm-date">
            ${cityTime.format("dddd, MMMM Do YYYY")}
          </div>
        </div>
        <div class="time" id="stockholm-time">
          ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
        </div>
      </div>
    `;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);

setInterval(updateTime, 1000);
