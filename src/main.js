const player = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const currentTime = document.querySelector("#current-time");
const totalTime = document.querySelector("#total-time");
const progress = document.querySelector(".progress");

player.onloadedmetadata = function () {
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

player.addEventListener("timeupdate", function updateProgress() {
  let current = player.currentTime;
  let percent = (current / player.duration) * 100;
  progress.style.width = percent + "%";

  currentTime.textContent = formatTime(current);
});

progress.addEventListener("click", function updateProgress() {
  let current = player.currentTime;
  let percent = (current / player.duration) * 100;
  progress.style.width = percent + "%";

  currentTime.textContent = formatTime(current);
  console.log(currentTime);
});

function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}
