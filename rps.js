var playerWins, computerWins;
var playerScore, computerScore;

function getComputerChoice() {
    const lst = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return lst[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerWins = false;

    if (playerSelection === computerSelection) { console.log('Tie'); }
    else if (playerSelection == 'rock') {
        if (computerSelection === 'paper') { console.log("You Lose! Paper beats Rock"); computerWins = true; }
        else { console.log("You Win! Rock beats Scissors"); playerWins = true; }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') { console.log("You Win! Paper beats Rock"); playerWins = true; }
        else { console.log("You Lose! Scissors beat Paper"); computerWins = true}
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') { console.log("You Lose! Rock beats Scissors"); computerWins = true}
        else { console.log("You Win! Scissors beat Paper"); playerWins = true; }
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Please enter your selection");
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        if (playerWins) { playerScore += 1; }
        if (computerWins) { computerScore += 1; }
        playerWins = false;
        computerWins = false;
    }
    if (playerScore === computerScore){return "It's a tie!";}
    else if (playerScore > computerScore){return "You win, congrats!";}
    else {return "You lose. Maybe next time :)"}
}

console.log(game());
