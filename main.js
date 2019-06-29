let startButton = document.getElementById('start-button');
let greenBtn = document.getElementById('pad-top-left');
let redBtn = document.getElementById('pad-top-right');
let blueBtn = document.getElementById('pad-bottom-left');
let yellowBtn = document.getElementById('pad-bottom-right');
let round = 0;
let playerInput = [];
let solution = [];
let correct = false;

function generateSequence() {
    for (let index = 0; index < 15; index++) {
        
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
}

function displaySequence() {
    let i = 0;
    const interval = setInterval(() => {
        if (i===round) {
            clearInterval(interval);
        } else {      
            switch (solution[i]) {
                case 'green':
                    greenBtn.style.background = 'white';
                    setTimeout(() => {
                        greenBtn.style.background = 'green';
                        }, 500);
                    i++;
                    break;
            
                case 'red':
                    redBtn.style.background = 'white';
                    setTimeout(() => {
                        redBtn.style.background = 'red';
                        }, 500);
                    i++;
                    break;

                case 'blue':
                    blueBtn.style.background = 'white';
                    setTimeout(() => {
                        blueBtn.style.background = 'blue';
                        }, 500);
                    i++;
                    break;

                case 'yellow':
                    yellowBtn.style.background = 'white';
                    setTimeout(() => {
                        yellowBtn.style.background = 'yellow';
                        }, 500);
                    i++;
                    break;
                default:
                    break;
            }
        }
    }, 1000);
}


startButton.addEventListener('click', (event) => {
    startButton.style.cursor = 'unset';
    startButton.disabled = true;
    round = 1;
    generateSequence();
    displaySequence();
})

greenBtn.addEventListener('click', (event) => {
    greenBtn.style.background = 'white';
})

redBtn.addEventListener('click', (event) => {
    redBtn.style.background = 'white';
})
blueBtn.addEventListener('click', (event) => {
    blueBtn.style.background = 'white';
})
yellowBtn.addEventListener('click', (event) => {
    yellowBtn.style.background = 'white';
})


console.dir([solution]);