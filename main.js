const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
  //date debut nouvelle année
  const newYearsDate = new Date(newYears);
  //date actuelle
  const currentDate = new Date();

  // total seconds
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  //jours
  const days = Math.floor(totalSeconds / 3600 / 24);

  //heures
  const hours = Math.floor(totalSeconds / 3600) % 24;

  //minutes
  const mins = Math.floor(totalSeconds / 60) % 60;
  //second
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//appel initial
countdown();

setInterval(countdown, 1000);
