let homeRender = document.querySelector("#render-home");
let guestRender = document.querySelector("#render-guest");
let saveEl = document.querySelector("#save");
let resetEl = document.querySelector("#reset");
let scoreEl = document.querySelector("#score");
let winnerEl = document.querySelector("#winner");
// console.log(resetEl);
let result = {
  count: 0,
  count2: 0,
};

function reset() {
  let restart = 0;
  if (homeRender.textContent !== 0) {
    result.count = restart;
  } else if (guestRender.textContent !== 0) {
    result.count2 = restart;
  }
}

function addH() {
  homeRender.textContent = result.count++;
  updateScoreEl();
}

function addTwoH() {
  homeRender.textContent = result.count += 2;
}

function addThreeH() {
  homeRender.textContent = result.count += 3;
}

function addG() {
  guestRender.textContent = result.count2++;
}

function addTwoG() {
  guestRender.textContent = result.count2 += 2;
}

function addThreeG() {
  guestRender.textContent = result.count2 += 3;
}

function save() {
  scoreEl.innerText = homeRender.textContent + "-" + guestRender.textContent;
  updateScoreEl();
  reset();
}

function updateScoreEl() {
  let score1 = "Home!";
  let score2 = "Guest!";
  if (homeRender.textContent > guestRender.textContent) {
    winnerEl.innerText = "current Winner: " + score1;
  } else if (homeRender.textContent < guestRender.textContent) {
    winnerEl.innerText = "current Winner: " + score2;
  } else if (homeRender.textContent === guestRender.textContent) {
    winnerEl.innerText = "It's a Draw";
  }
}
