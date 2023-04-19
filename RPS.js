function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection;

    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'Tie, you both chose rock!';
                case 'paper':
                    score--;
                    return 'You lose, paper beats rock!';
                case 'scissors':
                    score++;
                    return 'You win, rock beats scissors!';
            }

        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    score++;
                    return 'You win, paper beats rock!';
                case 'paper':
                    return 'Tie, you both chose paper!';
                case 'scissors':
                    score--;
                    return 'You lose, scissors beat paper!';               
            }

        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    score--;
                    return 'You lose, rock beats paper!';
                case 'paper':
                    score++;
                    return 'You win, scissors beats paper!';
                case 'scissors':
                    return 'Tie, you both chose scissors!';
           
            }
        
        default:
            score--;
            return 'Invalid input, computer wins!';
    }
}

function game() {
    score = 0;
    for (i = 0; i < 5; i++){
        const playerSelection = prompt('Enter rock, paper, or scissors!')
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (score > 0) console.log(`You win the game by ${score}!`);
    else if (score < 0) console.log(`You lose the game by ${score * -1}!`);
    else console.log('You tied the game!');
}

let score = 0;
game();