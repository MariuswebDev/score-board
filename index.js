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
  // Reset both scores to zero and update the UI
  result.count = 0;
  result.count2 = 0;
  homeRender.textContent = 0;
  guestRender.textContent = 0;
  // Refresh winner/score display
  updateScoreEl();
}

function addH() {
  result.count++;
  homeRender.textContent = result.count;
  updateScoreEl();
}

function addTwoH() {
  result.count += 2;
  homeRender.textContent = result.count;
  updateScoreEl();
}

function addThreeH() {
  result.count += 3;
  homeRender.textContent = result.count;
  updateScoreEl();
}

function addG() {
  result.count2++;
  guestRender.textContent = result.count2;
  updateScoreEl();
}

function addTwoG() {
  result.count2 += 2;
  guestRender.textContent = result.count2;
  updateScoreEl();
}

function addThreeG() {
  result.count2 += 3;
  guestRender.textContent = result.count2;
  updateScoreEl();
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
