let startButton = document.getElementById('start-button');
let greenBtn = document.getElementById('pad-top-left');
let redBtn = document.getElementById('pad-top-right');
let bluenBtn = document.getElementById('pad-bottom-left');
let yellowBtn = document.getElementById('pad-bottom-right');
let round = 0;
let btnPressed = null;
let playerInput = [];
let solution = [];
//change getelements to query selectors up top
function nextRound() {
    let randomNumber = Math.floor(Math.random() * 4);

    switch (randomNumber) {
        case 0:
            solution.push('green');
            break;

        case 1:
            solution.push('red');
            break;
        
        case 2:
            solution.push('blue');
            break;
            
        case 3:
            solution.push('yellow');
            break;
        default:
            break;
    }
}

function showPath(solution) {
    // for solution.length {
    //     if else solution[n] == 'color' action color;
    // }
}

