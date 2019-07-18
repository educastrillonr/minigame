let difficulty;
let solution = [];
let playerInput = [];
const colorPads = [
  $("#pad-top-left"),
  $("#pad-top-right"),
  $("#pad-bottom-left"),
  $("#pad-bottom-right")
];

const goToGame = () => {
  $("#difficulty-section").hide();
  $("main").show();
  $("input").prop("disabled", true);
};

const goToDifficultySection = () => {
  $("main").hide();
  $("#difficulty-section").show();
  $("input").prop("disabled", false);
};

const setDifficulty = () => {
  switch ($("input[name='difficulty']").val()) {
    case "easy":
      difficulty = 0;
      break;
    case "medium":
      difficulty = 1;
      break;
    case "hard":
      difficulty = 2;
      break;
    case "godmode":
      difficulty = 3;
      break;
  }
  console.log(difficulty);
  
  goToGame();
};

const newGame = () => {
  $("#start-button").hide();
  addRound();
  $("#gamepad-wrapper > p").html("Round: " + solution.length);
  displaySequence();
  enablePlayerInput();
};

const addRound = () => {
  solution.push(Math.floor(Math.random() * 4));
};

const displaySequence = () => {
  let i = 0;
  const interval = setInterval(() => {
    if (i === solution.length) {
      clearInterval(interval);
    } else {
      flashColor(solution[i]);
      i++;
    }
  }, 1000);
};

const flashColor = position => {
  const originalColor = colorPads[position].css("background");
  colorPads[position].css("background", "white");
  setTimeout(() => {
    colorPads[position].css("background", originalColor);
  }, 200);
};

const enablePlayerInput = () => {
  $("input[name='game-pads']").prop("disabled", false);
};

const getPlayerInput = () => {
  playerInput.push($("input[name='game-pads").val());
  console.log(playerInput);
  
  check();
};

const check = () => {
  let correct =
    playerInput[playerInput.length - 1] == solution[playerInput.length - 1];

  if (!correct) {
    alert('yu lost');
    resetGame();
  }
};

const resetGame = () => {
    solution = [];
    playerInput = [];
    difficulty = null;
    $("#start-button").show();
    $("#gamepad-wrapper > p").html("");
}

$("main").hide();
