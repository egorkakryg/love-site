function showLove() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("love").classList.remove("hidden");
}

function reveal(el) {
  let span = el.querySelector("span");
  span.style.display = "block";
}

/* 🎮 игра */
const emojis = ["💖","💖","🎀","🎀","🧸","🧸","💘","💘"];

function startGame() {
  document.getElementById("love").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  let grid = document.getElementById("grid");
  grid.innerHTML = "";

  let shuffled = [...emojis].sort(() => Math.random() - 0.5);

  shuffled.forEach(e => {
    let div = document.createElement("div");
    div.className = "cell";
    div.dataset.value = e;
    div.innerText = "?";
    div.onclick = clickCell;
    grid.appendChild(div);
  });
}

let first = null;

function clickCell() {
  if (this.innerText !== "?") return;

  this.innerText = this.dataset.value;

  if (!first) {
    first = this;
  } else {
    if (first.dataset.value === this.dataset.value) {
      first = null;
    } else {
      let second = this;
      setTimeout(() => {
        first.innerText = "?";
        second.innerText = "?";
        first = null;
      }, 600);
    }
  }

  checkWin();
}

function checkWin() {
  let cells = document.querySelectorAll(".cell");
  let done = [...cells].every(c => c.innerText !== "?");

  if (done) {
    setTimeout(() => {
      document.getElementById("game").classList.add("hidden");
      document.getElementById("photos").classList.remove("hidden");
    }, 600);
  }
}

/* 💖 сердечки */
setInterval(() => {
  let heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random()*3) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);