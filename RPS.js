const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const p = document.createElement('p');



function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection;

    if (playerChoice === computerChoice) {
        p.innerText = `Tie, you both chose ${playerChoice}! Score: ${score}`;
        outcomeDiv.appendChild(p);
    }

    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        score--;
        p.innerText = `You lose, paper beats rock! Score: ${score}`;
        outcomeDiv.appendChild(p);
    }
    
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        score++;
        p.innerText = `You win, rock beats scissors! Score: ${score}`;
        outcomeDiv.appendChild(p);
    }

    else if (playerChoice === 'paper' && computerChoice === 'rock'){
        score++;
        p.innerText = `You win, paper beats rock! Score: ${score}`;
        outcomeDiv.appendChild(p);
    }

    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        score--;
        p.innerText = `You lose, scissors beat paper! Score: ${score}`; 
        outcomeDiv.appendChild(p);
    }

    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        score--;
        p.innerText = `You lose, rock beats scissors! Score: ${score}`;
        outcomeDiv.appendChild(p);
    }

    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        score++;
        p.innerText = `You win, scissors beats paper! Score: ${score}`;
        outcomeDiv.appendChild(p);
    }

    if (score >= 5) {
        p.innerText = `Your score is ${score}, you win!`;
        score = 0;
    }

    else if (score <= -5) {
        p.innerText = `Your score is ${score}, you lose!`;
        score = 0;
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});

let score = 0;