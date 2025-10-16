let homeRender = document.querySelector("#render-home");
let guestRender = document.querySelector("#render-guest");
let saveEl = document.querySelector("#save");
let resetEl = document.querySelector("#reset");
let scoreEl = document.querySelector("#score");

let result = {
  count: 0,
  count2: 0,
};

function addH() {
  homeRender.textContent = result.count++;
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
  reset();
}
