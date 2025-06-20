// script.js
let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
  const date = new Date(time);
  return date.toISOString().substr(11, 8);
}

function start() {
  if (timerInterval) return;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 100);
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!elapsedTime) return;
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(lapItem);
}
