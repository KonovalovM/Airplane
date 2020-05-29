function createStartScreen() {
	startScreenGif = document.createElement('div');
	startScreenGif.id = 'start_screen';
	gameField.appendChild(startScreenGif);

	let startScreenSound = new sound('snd/StartScreen/PlaneEngineStart.mp3');
	startScreenSound.play();

	setTimeout(function(){
		removeStartScreen()
	}, 12000)

	function removeStartScreen(){
		startScreenGif.remove();
		startScreenSound.remove();
	}
}

let startPlanePosLeft;
function createStartBlock() {
    startGame = document.createElement("div");
    startPlane = document.createElement("div");
    startButton = document.createElement("div");
    
    startGame.id = "start_game";
    startPlane.id = "start_plane";
    startButton.id = "start_button"; 
       
    startGame.appendChild(startButton);
    startGame.appendChild(startPlane);
    
    gameField.appendChild(startGame);

	setTimeout (function(){
	    startPlane.style.width = "600px";
		startPlane.style.height = "300px";
	    startPlane.style.top = "100px";
	    startPlane.style.left = startPlanePosLeft;
	},200);

}

function removeStartBlock() {
	startPlane.remove();
	startGame.remove();
}

let restartButton;
function createGameOver() {
	gameOver = document.createElement('div');
	gameOver.id = 'game_over';

	setTimeout(function(){
		restartButton = document.createElement('div');
		restartButton.id = 'restart_button';
		gameOver.appendChild(restartButton);	
		restartButton.onclick = restart;

		gameOverText = document.createElement('h2');
		gameOverText.id = 'game_over_text';
		gameOverText.innerText = 'Game Over! Your score: ' + points;
		gameOver.appendChild(gameOverText);

		gameOverReason = document.createElement('h2');
		gameOverReason.id = 'game_over_reason';
		gameOverReason.innerText = 'Your plane was destroyed';
        gameOver.appendChild(gameOverReason);

	}, 2500)
    
	
	planeFalling = new sound('snd/Crash/PLaneCrashed.mp3')
    if (flag2 == true) {
	planeFalling.play();
    }

    gameField.appendChild(gameOver);
}

function removeGameOver() {
	gameOver.remove();
	restartButton.remove();
}

function restart(){
	location.reload();
}
