function createFuelTank() {
	let fuelTank = document.createElement('div');
	fuelTank.className = 'fuel_tank';
	gameField.appendChild(fuelTank);

	let fuelTankWidth = fuelTank.clientWidth;

	fuelTank.style.left = gameFieldWidth + fuelTankWidth + 'px';
	fuelTank.style.top = random(200, 440) + 'px';

	let spawnFuelTanks = setInterval(function(){
		createFuelTank();
		clearInterval(spawnFuelTanks);
	}, 20000);

	let fuelTankMove = setInterval(function(){
		fuelTank.style.left = fuelTank.offsetLeft - 2 + 'px';

		if(fuelTank.offsetLeft <=  fuelTank.clientWidth){
			fuelTank.remove();
			clearInterval(fuelTankMove);
		}	
		if(lifesQuantity == 0){
			fuelTank.style.zIndex = '-1';
			clearInterval(spawnFuelTanks);
		}
	}, 10)

	collisionCheckFuel(plane, fuelTank);
}

//check collision with plane and fuel tank
function collisionCheckFuel(airPlane, object) {

	let collision = setInterval(function(){
		
		if((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft)
			 && (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth) 
			 && (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop) 
			 && (airPlane.offsetTop <= object.offsetTop + object.clientHeight)){
			
			if(fuelLevel.innerText != '100'){
				removeFuelBlock();
				fuelLevel.innerText = '100';
				clearInterval(decreaseFuel);
                createFuelBlock();
                 if (flag3 == true){
                audio3.src = 'snd/Objects/Fuel.mp3';
                audio3.autoplay = true;
                };
			}
			object.remove();
			
			clearInterval(collision);
		}
	},10)
}

function createHealth() {
	let restoreHealth = document.createElement('div');
	restoreHealth.className = 'health_restore';
	gameField.appendChild(restoreHealth);

	let restoreHealthWidth = restoreHealth.clientWidth;

	restoreHealth.style.left = gameFieldWidth + 2*restoreHealthWidth + 'px';
	restoreHealth.style.top = random(10, 500) + 'px';

	let spawnRestoreHealth = setInterval(function(){
		createHealth();
		clearInterval(spawnRestoreHealth);
	}, 15000);

	let restoreHealthMove = setInterval(function(){
		restoreHealth.style.left = restoreHealth.offsetLeft - 3 + 'px';

		if(restoreHealth.offsetLeft <=  restoreHealth.clientWidth){
			restoreHealth.remove();
			clearInterval(restoreHealthMove);
		}	
		if(lifesQuantity == 0){
			restoreHealth.style.zIndex = '-1';
			clearInterval(spawnRestoreHealth);
		}
	}, 10)

	collisionCheckHealth(plane, restoreHealth);
}

//check collision with plane and health
function collisionCheckHealth(airPlane, object) {

	let collision = setInterval(function(){
		if((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft)
			 && (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth) 
			 && (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop) 
			 && (airPlane.offsetTop <= object.offsetTop + object.clientHeight)){
			if(healthLevel != 100){
				removeHealthBlock();
				// заокруглюємо рівень здоров'я до найближчих 100%
				healthLevel = 100;
				createHealthBlock();
                if (flag3 == true){
                audio3.src = 'snd/Objects/Health.mp3';
                audio3.autoplay = true;
                };
			}
			
			object.remove();
			
			clearInterval(collision);
		}
	},10)
}

function createCoins() {
	let coin = document.createElement('div');
	coin.className = 'coin';
	gameField.appendChild(coin);

	let coinWidth = coin.clientWidth;

	coin.style.left = gameFieldWidth + 2*coinWidth + 'px';
	coin.style.top = random(100, 500) + 'px';

	let spawnCoin = setInterval(function(){
		createCoins();
		clearInterval(spawnCoin);
		// console.log(random(100, 500) + Math.sin(2 * Math.PI/12 * random(1,12)) + random(120, 150))
	}, 2000);

	let coinMove = setInterval(function(){
		coin.style.left = coin.offsetLeft - 1 + 'px';

		if(coin.offsetLeft <=  coin.clientWidth){
			coin.remove();
			clearInterval(coinMove);
		}	
		if(lifesQuantity == 0){
			coin.style.zIndex = '-100';
			coin.remove();
			clearInterval(spawnCoin);
		}
	}, 10)
	// spawnElementsSin(coin);
	collisionCheckCoin(plane, coin)
}
//check collision with plane and coins
function collisionCheckCoin(airPlane, object) {

	let collision = setInterval(function(){
		if((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft)
			 && (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth) 
			 && (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop) 
			 && (airPlane.offsetTop <= object.offsetTop + object.clientHeight)){
			
			if(lifesQuantity >= 1){
				removeScore();
	        	points += 1;
	        	console.log(points);
	            if (flag3 == true){
	                audio3.src = 'snd/Objects/Point3.mp3';
	                audio3.autoplay = true;
	            };
				createScore();
				
				object.remove();
			}
			clearInterval(collision);
		}
	},10)
}

function createStars() {
	let star = document.createElement('div');
	star.className = 'star';
	gameField.appendChild(star);

	let starWidth = star.clientWidth;

	star.style.left = gameFieldWidth + 2*starWidth + 'px';
	star.style.top = random(50, 150) + 'px';

	let spawnStar = setInterval(function(){
		createStars();
		clearInterval(spawnStar);
		// console.log(random(100, 500) + Math.sin(2 * Math.PI/12 * random(1,12)) + random(120, 150))
	}, 25000);

	let starMove = setInterval(function(){
		star.style.left = star.offsetLeft - 1 + 'px';

		if(star.offsetLeft <=  star.clientWidth){
			star.remove();
			clearInterval(starMove);
		}	
		if(lifesQuantity == 0){
			star.style.zIndex = '-100';
			star.remove();
			clearInterval(spawnStar);
		}
	}, 10)


	collisionCheckStar(plane, star)

}
//check collision with plane and coins
function collisionCheckStar(airPlane, object) {

	let collision = setInterval(function(){
		if((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft)
			 && (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth) 
			 && (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop) 
			 && (airPlane.offsetTop <= object.offsetTop + object.clientHeight)){
			
			if(lifesQuantity >= 1){
				removeScore();
				points += 25;
				console.log(points);
	            if (flag3 == true){
	                audio3.src = 'snd/Objects/Point.mp3';
	                audio3.autoplay = true;
	            }
				createScore();
				
				object.remove();
			}
			
			clearInterval(collision);
		}
	},10)
}

function createDiamonds() {
	let diamond = document.createElement('div');
	diamond.className = 'diamond';
	gameField.appendChild(diamond);

	let diamondWidth = diamond.clientWidth;

	diamond.style.left = gameFieldWidth + 2*diamondWidth + 'px';
	diamond.style.top = random(450, 550) + 'px';

	let spawnDiamond = setInterval(function(){
		createDiamonds();
		clearInterval(spawnDiamond);
		// console.log(random(100, 500) + Math.sin(2 * Math.PI/12 * random(1,12)) + random(120, 150))
	}, 35000);

	let diamondMove = setInterval(function(){
		diamond.style.left = diamond.offsetLeft - 5 + 'px';

		if(diamond.offsetLeft <=  diamond.clientWidth){
			diamond.remove();
			clearInterval(diamondMove);
		}	
		if(lifesQuantity == 0){
			diamond.style.zIndex = '-100';
			diamond.remove();
			clearInterval(spawnDiamond);
		}
	}, 10)

	collisionCheckDiamond(plane, diamond)
}
//check collision with plane and coins
function collisionCheckDiamond(airPlane, object) {

	let collision = setInterval(function(){
		
		if((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft)
			 && (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth) 
			 && (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop) 
			 && (airPlane.offsetTop <= object.offsetTop + object.clientHeight)){
			
			if(lifesQuantity >= 1){
				removeScore();
				points += 50;
				console.log(points); 
	            if (flag3 == true){
	                audio3.src = 'snd/Objects/Point2.mp3';
	                audio3.autoplay = true;
	            }
				createScore();
				object.remove();
			
			}
						
			clearInterval(collision);
		}
	},10)
}

