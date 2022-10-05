// Returns a randomly result of either rock paper scissors.
function getRobotChoice() {
    var choicesList = ["rock","paper","scissors"];
    var choice = choicesList[Math.floor(Math.random() * 3)];
    return choice;
}

// Plays a round, the Computer choice is optional, making the default a random result.
function playRound(playerChoice, robotChoice=getRobotChoice()){
    playerChoice = playerChoice.toLowerCase();
    robotChoice = robotChoice.toLowerCase();

    const resultMsg = `Player |${playerChoice}| vs Robot |${robotChoice}|`;

    if (playerChoice === robotChoice){
        return resultMsg + '\nTie!';
    }else if (
        (playerChoice === "rock" && robotChoice === "scissors") ||
        (playerChoice === "scissors" && robotChoice === "paper") ||
        (playerChoice === "paper" && robotChoice === "rock")){
        return resultMsg + '\nYou Win!';
    }else{
        return resultMsg + '\nYou Lose!';
    }
}

// Plays a 5 round game.
function game(){
    for (let i = 1; i<=5; i++) {
        alert(playRound(prompt())); 
    }
}

game();