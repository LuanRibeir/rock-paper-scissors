// Returns a randomly result of either rock paper scissors.
function getRobotChoice() {
    var choicesList = ["rock","paper","scissors"];
    var choice = choicesList[Math.floor(Math.random() * 3)];
    return choice;
}