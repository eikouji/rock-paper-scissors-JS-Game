
const computerChoiceDisplay = document.getElementById('computer-choice');

const userChoiceDisplay = document.getElementById('user-choice');

const resultDisplay = document.getElementById('result');

// pick out buttons by element //
const possibleChoices = document.querySelectorAll('button');

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // or * 3 //
    console.log(randomNumber)


    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber == 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice === userChoice) {
        // results in a tie, or a draw //
        result = 'Draw!'
    }

    // computer rock vs user paper / you win! //
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You won!'
    }

    // computer rock vs you scissors / you lose //
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lost!'
    }

    // computer paper vs you rock / you lose //
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lost!'
    }

    // computer paper vs you scissors / you win! //
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You win!'
    }

    // computer scissors vs you rock / you win //
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!'
    }

    // computer scissors vs you paper / you lose //
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lost!'
    }

    resultDisplay.innerHTML = result

 }