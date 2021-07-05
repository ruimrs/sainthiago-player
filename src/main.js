const player = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const currentTime = document.querySelector("#current-time");
const totalTime = document.querySelector("#total-time");
const progressBar = document.querySelector(".progress");

player.onloadedmetadata = function () {
  progressBar.max = player.duration;
  totalTime.textContent = formatTime(player.duration);
};

playBtn.addEventListener("click", () => {
  player.volume = 0.5;

  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
  playBtn.classList.toggle("fa-pause");
});

player.addEventListener("timeupdate", () => updateProgress());

progressBar.addEventListener("mouseup", () => updateProgressOnDrag());

function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}

function updateProgress() {
  let current = player.currentTime;
  progressBar.value = current;

  currentTime.textContent = formatTime(current);
}

function updateProgressOnDrag() {
  player.currentTime = progressBar.value;
  currentTime.textContent = formatTime(progressBar.value);
}
