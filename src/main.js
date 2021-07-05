// defs
const player = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const currentTime = document.querySelector("#current-time");
const totalTime = document.querySelector("#total-time");
const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const pin = document.querySelector(".pin");

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

player.addEventListener("timeupdate", () => updateProgress());

function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}

function updateProgress() {
  let current = player.currentTime;
  let percent = (current / player.duration) * 100;
  progress.style.width = percent + "%";

  currentTime.textContent = formatTime(current);
}

// Drag code

var dragItem = document.querySelector(".pin");
var container = document.querySelector(".song-bar");

var active = false;
var currentX;
var initialX;
var xOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
  } else {
    initialX = e.clientX - xOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
    } else {
      currentX = e.clientX - initialX;
    }

    xOffset = currentX;
    setTranslate(currentX, 0, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
