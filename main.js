const startButton = document.getElementById("start-button");
const greenBtn = document.getElementById("pad-top-left");
const redBtn = document.getElementById("pad-top-right");
const blueBtn = document.getElementById("pad-bottom-left");
const yellowBtn = document.getElementById("pad-bottom-right");
const result = document.getElementById("result");
const roundPrint = document.getElementById("round");
const main = document.getElementById("main");
const scoreBoard =  document.getElementById("score-board");
let round = 0;
let numberOfWins = 0;
const gameLength = 1;
let playerInput = [];
let solution = [];
let correct = false;

const newGame = () => {
  initialiseScores();
  startButton.removeEventListener("click", start);
  result.innerHTML = "&#8203";
  round = 1;
  roundPrint.innerHTML = "Round : " + round;
  generateSequence();
  displaySequence();
};

const generateSequence = () => {
  for (let index = 0; index < gameLength; index++) {
    let randomNumber = Math.floor(Math.random() * 4);
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
};

const displaySequence = () => {
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
};

const check = () => {
  //   console.dir([playerInput]);
  //   console.dir([solution]);
  if (
    playerInput[playerInput.length - 1] === solution[playerInput.length - 1]
  ) {
    correct = true;
  } else {
    result.innerHTML = "you lose :(";
    resetGame();
  }

  if (correct && playerInput.length === gameLength) {
    win();
  } else if (correct && playerInput.length === round) {
    round++;
    roundPrint.innerHTML = "Round : " + round;
    playerInput = [];
    disableButtons();
    displaySequence();
  }
};

const play = () => {
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
};

const resetGame = () => {
  round = 0;
  playerInput = [];
  solution = [];
  correct = false;
  disableButtons();
  startButton.addEventListener("click", start);
  alert('barry');
};

const disableButtons = () => {
  greenBtn.removeEventListener("click", gb);
  redBtn.removeEventListener("click", rb);
  blueBtn.removeEventListener("click", bb);
  yellowBtn.removeEventListener("click", yb);
};

const initialiseScores = () => {
  if (localStorage.getItem("numberOfWins") == undefined) {
    updateScores();
  } else {
    numberOfWins = parseInt(localStorage.getItem("numberOfWins"));
  }
};

startButton.addEventListener(
  "click",
  (start = event => {
    newGame();
  })
);

const updateScores = () => {
  localStorage.setItem("numberOfWins", numberOfWins);
};

const win = () => {
  result.innerHTML = "you win! :)";
  numberOfWins++;
  let score = document.createElement("li");
  score.innerHTML = numberOfWins;
  scoreBoard.appendChild(score);
  updateScores();
  resetGame();
};
