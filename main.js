const startButton = document.getElementById("start-button");
const greenBtn = document.getElementById("pad-top-left");
const redBtn = document.getElementById("pad-top-right");
const blueBtn = document.getElementById("pad-bottom-left");
const yellowBtn = document.getElementById("pad-bottom-right");
const result = document.getElementById("result");
const roundPrint = document.getElementById("round");
let round = 0;
const gameLength = 4;
let playerInput = [];
let solution = [];
let correct = false;

function newGame() {
  startButton.removeEventListener("click", start);
  result.innerHTML = "&#8203";
  round = 1;
  roundPrint.innerHTML = "Round : " + round;
  playerInput = [];
  solution = [];
  correct = false;
//   console.dir([playerInput]);
//   console.dir([solution]);
  generateSequence();
  displaySequence();
}

function winGame() {
  result.innerHTML = "you win! :)";
  round = 0;
  playerInput = [];
  solution = [];
  correct = false;
  greenBtn.removeEventListener("click", gb);
  redBtn.removeEventListener("click", rb);
  blueBtn.removeEventListener("click", bb);
  yellowBtn.removeEventListener("click", yb);
  startButton.addEventListener("click", start);
}

function loseGame() {
  result.innerHTML = "you lose :(";
  correct = false;
  round = 0;
  playerInput = [];
  solution = [];
  correct = false;
  greenBtn.removeEventListener("click", gb);
  redBtn.removeEventListener("click", rb);
  blueBtn.removeEventListener("click", bb);
  yellowBtn.removeEventListener("click", yb);
  startButton.addEventListener("click", start);
}

function generateSequence() {
  for (let index = 0; index < gameLength; index++) {
    let randomNumber = Math.floor(Math.random() * 4);
    // console.dir([playerInput]);
    // console.dir([solution]);

    switch (randomNumber) {
      case 0:
        solution.push("green");
        break;

      case 1:
        solution.push("red");
        break;

      case 2:
        solution.push("blue");
        break;

      case 3:
        solution.push("yellow");
        break;
      default:
        break;
    }
  }
}

function displaySequence() {
  let i = 0;
  const interval = setInterval(() => {
    if (i === round) {
      clearInterval(interval);
    } else {
      switch (solution[i]) {
        case "green":
          greenBtn.style.background = "white";
          setTimeout(() => {
            greenBtn.style.background = "green";
          }, 200);
          i++;
          break;

        case "red":
          redBtn.style.background = "white";
          setTimeout(() => {
            redBtn.style.background = "red";
          }, 200);
          i++;
          break;

        case "blue":
          blueBtn.style.background = "white";
          setTimeout(() => {
            blueBtn.style.background = "blue";
          }, 200);
          i++;
          break;

        case "yellow":
          yellowBtn.style.background = "white";
          setTimeout(() => {
            yellowBtn.style.background = "yellow";
          }, 200);
          i++;
          break;
        default:
          break;
      }
    }
  }, 1000);
  play();
}

function check() {
//   console.dir([playerInput]);
//   console.dir([solution]);
  if (
    playerInput[playerInput.length - 1] === solution[playerInput.length - 1]
  ) {
    correct = true;
  } else {
    loseGame();
  }

  if (correct && playerInput.length === gameLength) {
    winGame();
  } else if (correct && playerInput.length === round) {
    round++;
    roundPrint.innerHTML = "Round : " + round;
    playerInput = [];
    greenBtn.removeEventListener("click", gb);
    redBtn.removeEventListener("click", rb);
    blueBtn.removeEventListener("click", bb);
    yellowBtn.removeEventListener("click", yb);
    // console.dir([playerInput]);
    // console.dir([solution]);
    displaySequence();
  }
}

function play() {
  greenBtn.addEventListener(
    "click",
    (gb = event => {
      greenBtn.style.background = "white";
      setTimeout(() => {
        greenBtn.style.background = "green";
      }, 500);
      playerInput.push("green");
      check();
    })
  );

  redBtn.addEventListener(
    "click",
    (rb = event => {
      redBtn.style.background = "white";
      setTimeout(() => {
        redBtn.style.background = "red";
      }, 500);
      playerInput.push("red");
      check();
    })
  );
  blueBtn.addEventListener(
    "click",
    (bb = event => {
      blueBtn.style.background = "white";
      setTimeout(() => {
        blueBtn.style.background = "blue";
      }, 500);
      playerInput.push("blue");
      check();
    })
  );
  yellowBtn.addEventListener(
    "click",
    (yb = event => {
      yellowBtn.style.background = "white";
      setTimeout(() => {
        yellowBtn.style.background = "yellow";
      }, 500);
      playerInput.push("yellow");
      check();
    })
  );
}

startButton.addEventListener(
  "click",
  (start = event => {
    newGame();
  })
);
