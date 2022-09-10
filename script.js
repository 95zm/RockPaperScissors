
const Choice = Object.freeze({
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
})

function getRandomIntInclusive(min, max) {
    // Returns random integer between min and max, both inclusive

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getComputerChoice() {
    // Returns randomly generated choice of "rock" "paper" or "scissors"

    let random = getRandomIntInclusive(0, 2);

    switch(random) {
        case 0:
            // console.log(Choice.Rock);
            return Choice.Rock;
        case 1:
            // console.log(Choice.Paper);
            return Choice.Paper;
        case 2:
            // console.log(Choice.Scissors);
            return Choice.Scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    // Returns result of game given playerSelection and computerSelection

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();  //Capitalize first letter and lower case the rest of the player selection
    switch(playerSelection) {
        case Choice.Rock:
            if (computerSelection === Choice.Scissors) {
                return "You Win! Rock beats Scissors";
            } else if (computerSelection === Choice.Paper) {
                return "You Lose! Paper beats Rock";
            } else {
                return "Tie!";
            }
        
        case Choice.Paper:
            if (computerSelection === Choice.Rock) {
                return "You Win! Paper beats Rock";
            } else if (computerSelection === Choice.Scissors) {
                return "You Lose! Scissors beats Paper";
            } else {
                return "Tie!";
            }

        case Choice.Scissors:
            if (computerSelection === Choice.Paper) {
                return "You Win! Scissors beats Paper";
            } else if (computerSelection === Choice.Rock) {
                return "You Lose! Rock beats Scissors";
            } else {
                return "Tie!";
            }
    }
}

function game() {
    /* 5 round game of rock paper scissors with tally of player score and computer score.
        Console logs the result of the game and scores of both.
    */
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let userSelection = prompt("Type either \'rock\', \'paper\', or \'scissors\'");
        let result = playRound(userSelection, getComputerChoice());
        console.log(result);
        // User wins, increment userScore by 1
        if (result.includes("Win")) {
            userScore++;
        //Computer wins, increment computeScore by 1
        } else if (result.includes("Lose")) {
            computerScore++;
        // Tie game, increment userScore and computerScore by 1
        } else {
            userScore++;
            computerScore++;
        }
    }

    if (userScore === computerScore) {
        console.log("Tie game");
    } else if (userScore > computerScore) {
        console.log("Player wins");
    } else {
        console.log("Computer wins");
    }
    console.log(`Player score: ${userScore}. Computer score: ${computerScore}`);
}

game();