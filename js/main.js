function start() {
	createStartBlock();
//    підключаємо кнопки для звуків
    Sound1();
    Sound2();
    Sound3();
    btnControls();
//    підключаємо кнопку для інформації по керуванню 
    control();
//    включення/виключення фону
    buttonSound.onclick = music;
//    включення/виключення звуку мотору    
    buttonSound2.onclick = voice;
//    включення/виключення звуку інших звуків       
    buttonSound3.onclick = ding;
//    викликає інформаційне меню 
    buttonControls.onclick = info;
//	після кліку по кнопці Start запускаємо функцію "play"
	startButton.onclick = play;
}

// при старті гри виконуємо цю функцію
function play() {
    startButton.remove();
	// статус = початок
	status = "beginning";
	// міняємо PNG на GIF для кнопки Start
	if (flag4 == true){
        info();
    };
    if (flag1 == false){
        music();
    }
    if (flag2 == false){
        voice();
    }
    if (flag3 == false){
        ding();
    }    
	startPlaneTakeOff();
	setTimeout(function(){
		
		removeStartBlock();
		createInfoBlock();
		createBackground();
		createFuelBlock();
		createPlane();
		createLifes();
		createScore();
		createHealthBlock();
		createObstacles();

		let checkPlane = setInterval(function(){
			if(lifesQuantity == 0){
				setTimeout(function(){
					plane.remove();
					gameEnd();
				}, 500)
				clearInterval(checkPlane);
			}
		}, 10)
		
	}, 2600)
}

function startPlaneTakeOff() {
	startPlane.style.width = "800px";
	startPlane.style.height = "400px";
	startPlane.style.top = "-350px";
	startPlane.style.left = '-1000px';

	let takeOffSound = new sound('snd/Engine/PlaneFlying.mp3');
	takeOffSound.play();
	setTimeout(function(){
		takeOffSound.remove();
	},3000)
}

// запуск функції "start"
start();

// ФУНКЦІЯ для завершення гри 
function gameEnd() {
	// присвоюємо статус = "завершення"
	status = "ending";
	flag3 = false;
	createGameOver();
	removeStartBlock();
	removeInfoBlock();
	removeLifes();
	removeScore();
	plane.remove();
	removeHealthBlock();
	removeFuelBlock();
	removeBackground();

	planeSound.remove();
}

