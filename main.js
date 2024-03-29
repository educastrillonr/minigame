let difficulty;
const difficultySpeeds = [1000, 700, 400, 300];
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
  $("#btn-container > button").prop("disabled", true);
  disablePlayerInput();
};

const goToDifficultySection = () => {
  resetGame();
  $("main").hide();
  $("#difficulty-section").show();
  $("button").prop("disabled", false);
  disablePlayerInput();
};

const setDifficulty = level => {
  difficulty = level;
  goToGame();
};

const newGame = () => {
  $("#start-button").hide();
  addRound();
};

const addRound = () => {
  playerInput = [];
  solution.push(Math.floor(Math.random() * 4));
  $("#control-pad > p").html("Round: " + solution.length);
  displaySequence();
  enablePlayerInput();
};

const displaySequence = () => {
  disablePlayerInput();
  let i = 0;
  const interval = setInterval(() => {
    if (i === solution.length) {
      clearInterval(interval);
    } else {
      flashColor(solution[i]);
      i++;
    }
  }, difficultySpeeds[difficulty]);
};

const flashColor = position => {
  const originalColor = colorPads[position].css("background");
  colorPads[position].css("background", "white");
  setTimeout(() => {
    colorPads[position].css("background", originalColor);
  }, difficultySpeeds[difficulty]/5);
};

const enablePlayerInput = () => {
  $("#gamepad-wrapper > button").prop("disabled", false);
};

const disablePlayerInput = () => {
  $("#gamepad-wrapper > button").prop("disabled", true);
};

const getPlayerInput = color => {
  playerInput.push(color);
  flashColor(color);
  check();
};

const check = () => {
  let correct =
    playerInput[playerInput.length - 1] == solution[playerInput.length - 1];

  if (!correct) {
    alert("yu lost");
    resetGame();
  } else if (correct && playerInput.length === solution.length) {
    addRound();
  }
};

const resetGame = () => {
  solution = [];
  playerInput = [];
  difficulty = null;
  disablePlayerInput();
  $("#start-button").show();
  $("#control-pad > p").html("");
};

$("main").hide();
