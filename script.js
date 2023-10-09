const time = document.getElementById("time");
const toStart = document.getElementById("start");
const toStop = document.getElementById("stop");

let stopwatch;
let counter = 0;

toStart.addEventListener("click", function () {
  stopwatch = setInterval(() => {
    counter++;
    time.innerHTML = counter;
  }, 1000);
});

toStop.addEventListener("click", function () {
  clearInterval(stopwatch);
});
