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

const newGame = () => {
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
    result.innerHTML = "you win! :)";
    resetGame();
  } else if (correct && playerInput.length === round) {
    round++;
    roundPrint.innerHTML = "Round : " + round;
    playerInput = [];
    disableButtons();
   
    // console.dir([playerInput]);
    // console.dir([solution]);
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
};

const disableButtons = () => {
  greenBtn.removeEventListener("click", gb);
  redBtn.removeEventListener("click", rb);
  blueBtn.removeEventListener("click", bb);
  yellowBtn.removeEventListener("click", yb);
};

startButton.addEventListener(
  "click",
  (start = event => {
    newGame();
  })
);

// const scores = JSON.parse(localStorage.getItem('scores'));
// console.log(scores[0]);