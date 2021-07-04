const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", () => changeBtn(playBtn, "play"));

const pauseBtn = document.getElementById("play-btn");
pauseBtn.addEventListener("click", () => changeBtn(pauseBtn, "pause"));

function changeBtn(btn, type) {
  switch (type) {
    case "pause":
      btn.classList.remove("fa-pause");
      btn.classList.add("fa-play");
    case "play":
      btn.classList.remove("fa-play");
      btn.classList.add("fa-pause");
  }
}
