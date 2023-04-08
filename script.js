// Returns a randomly result of either rock paper scissors.
function getRobotChoice() {
	var choicesList = ['rock', 'paper', 'scissors'];
	var choice = choicesList[Math.floor(Math.random() * 3)];
	return choice;
}

// Plays a round, the Computer choice is optional, making the default a random result.
function playRound(playerChoice, robotChoice = getRobotChoice()) {
	playerChoice = playerChoice.toLowerCase();

	const resultMsg = `Player |${playerChoice}| vs Robot |${robotChoice}|`;

	if (playerChoice === robotChoice) {
		return resultMsg + '\nTie!';
	} else if (
		(playerChoice === 'rock' && robotChoice === 'scissors') ||
		(playerChoice === 'scissors' && robotChoice === 'paper') ||
		(playerChoice === 'paper' && robotChoice === 'rock')
	) {
		return resultMsg + '\nYou Win!';
	} else {
		return resultMsg + '\nYou Lose!';
	}
}

// Plays a 5 round game.
function game() {
	let robotWins = 0,
		playerWins = 0, // Keeps score.
		draw = 0,
		over = false;

	const placar = ["src/blank.png", "src/1.png", "src/2.png", "src/3.png", "src/4.png", "src/blank.png"];  

	const rockBtn =  document.getElementById("rockBtn");
	const paperBtn =  document.getElementById("paperBtn");
	const scissorsBtn =  document.getElementById("scissorsBtn");

	const placarPlayer =  document.getElementsByClassName("placar-player")[0];
	const placarBot =  document.getElementsByClassName("placar-bot")[0];
	const placarMiddle =  document.getElementsByClassName("placar-middle")[0];

	rockBtn.addEventListener("click", () => {start("rock");});
	rockBtn.addEventListener("mouseout", () => {
		document.getElementsByClassName('rock-img')[0].src = 'src/rock.png';});
	rockBtn.addEventListener("mouseover", () => {
		document.getElementsByClassName('rock-img')[0].src = 'src/rock-selected.png';});

	
	paperBtn.addEventListener("click", () => {start("paper");});
	paperBtn.addEventListener("mouseout", () => {
		document.getElementsByClassName('paper-img')[0].src = 'src/paper.png';});
	paperBtn.addEventListener("mouseover", () => {
		document.getElementsByClassName('paper-img')[0].src = 'src/paper-selected.png';});

	
	scissorsBtn.addEventListener("click", () => {start("scissors");});
	scissorsBtn.addEventListener("mouseout", () => {
		document.getElementsByClassName('scissors-img')[0].src = 'src/scissors.png';});
	scissorsBtn.addEventListener("mouseover", () => {
		document.getElementsByClassName('scissors-img')[0].src = 'src/scissors-selected.png';});

	function start(choice){
		const playerChoice = choice.toLowerCase();
		const robotChoice = getRobotChoice();
		const playMsg = playRound(playerChoice, robotChoice);

		if (over) {
			robotWins = 0;
			playerWins = 0; // Resets score.
			draw = 0;

			placarPlayer.src = placar[0];
			placarBot.src = placar[0];	// Resets pictures.
			placarMiddle.src = "src/vs.png";
			
			over = false;
		}

		// Stores result for later comparisons.
		if (playerChoice == robotChoice) {
			draw++;
			placarMiddle.src = "src/draw.png"
		} else if (playMsg.includes('Win')) {
			playerWins++
			placarPlayer.src = placar[playerWins];
			placarMiddle.src = "src/win.png"
		} else {
			robotWins++;
			placarBot.src = placar[robotWins];
			placarMiddle.src = "src/lose.png"

		}

		// Reports a winner or loser at the end.
		if (robotWins >= 5){
			placarPlayer.src = "src/lose.png";
			placarMiddle.src =  "src/youlose.png";
			placarBot.src = "src/lose.png";

			over = true;

		} else if(playerWins >= 5){
			placarPlayer.src = "src/win.png";
			placarMiddle.src =  "src/youwin.png";
			placarBot.src = "src/win.png";	
			
			over = true;
		}
	}
}

game();
