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
  $("#btn-container > button").prop("disabled", true)
  $("#gamepad-wrapper > button").prop("disabled", true);
};

const goToDifficultySection = () => {
  $("main").hide();
  $("#difficulty-section").show();
  $("button").prop("disabled", false);
};

const setDifficulty = (level) => {
  difficulty = level;
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
  $("#gamepad-wrapper > button").prop("disabled", false);
};

const getPlayerInput = () => {
  playerInput.push($("#gamepad-wrapper > button").val());
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
