let difficulty;
let round;

const goToGame = () => {
    $('#difficulty-section').hide();
    $('main').show();
}

const goToDifficultySection = () => {
    $('main').hide();
    $('#difficulty-section').show();
}

const setEasy = () => {
    difficulty = 0;
    goToGame();
}

const setMedium = () => {
    difficulty = 1;
    goToGame();
}

const setHard = () => {
    difficulty = 2;
    goToGame();
}

const setGodmode = () => {
    difficulty = 3;
    goToGame();
}

const newGame = () => {
    $('#start-button').hide();
    round = 1;
    $('#gamepad-wrapper > p').html('Round: ' + round);
    // result.innerHTML = "&#8203";
    // round = 1;
    // roundPrint.innerHTML = "Round : " + round;
    // generateSequence();
    // displaySequence();
  };

$('main').hide();