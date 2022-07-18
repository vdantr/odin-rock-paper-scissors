function getComputerChoice() {
    const lst = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return lst[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLower();

    if (playerSelection === computerSelection) { return 'Tie'; }
    else if (playerSelection == 'rock') {
        if (computerSelection === 'paper') { return "You Lose! Paper beats Rock"; }
        else { return "You Win! Rock beats Scissors"; }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') { return "You Win! Paper beats Rock"; }
        else { return "You Lose! Scissors beat Paper"; }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') { return "You Lose! Rock beats Scissors"; }
        else { return "You Win! Scissors beat Paper"; }
    }
}

let playerSelection = prompt("Please enter your selection");
let computerSelection = getComputerChoice();