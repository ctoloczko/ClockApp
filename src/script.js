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

updateTime();
setInterval(updateTime, 1000);
