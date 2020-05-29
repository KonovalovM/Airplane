let infoBlock;
function createInfoBlock(){
	infoBlock = document.createElement('div');
	infoBlock.id = 'info_block';
	gameField.appendChild(infoBlock);
}

// кількість життів задається тут
let lifesQuantity = 1;
// ФУНКЦІЯ створення ідентифікатора життів
function createLifes() {
	// створюємо блок  <div id="Lifes">
	lifes = document.createElement("div");
	lifes.id = "lifes";

	let currentLifesQuantity = 0;
	// поки поточна кількість життів менша, ніж ми хочемо бачити
	while (currentLifesQuantity < lifesQuantity) {
		// створюємо тег span
		let lifeSpan = document.createElement("span");
		// поміщаємо span у блок життів
		lifes.appendChild(lifeSpan);
		// збільшуємо кількість поточних життів на 1
		currentLifesQuantity++;
	}
	// заносимо блок з життями у ігрове поле
	infoBlock.appendChild(lifes);
}

let points = 0;
// ФУНКЦІЯ створення блоку з рахунком гри
function createScore() {
	// створюємо блок div для score
	score = document.createElement("div");
	// додаємо тегу div ідентифікатор id="score" 
	score.id = "score";
	// виводимо текст Score і кількість очок
	score.innerText = "Score: " + points;
	// додаємо поле з рахунком гри в ігрове поле <div id="GameField">
	infoBlock.appendChild(score);
}

let healthLevel = 100;
function createHealthBlock() {
	healthBlock = document.createElement('div');
	healthBlock.id = 'health';
	healthBlock.innerText = 'Health: ' + healthLevel + '%';
	infoBlock.appendChild(healthBlock);

	if(healthLevel <= 0){
		lifesQuantity -= 1;
		removeLifes();
		createLifes();
	}
}

function createFuelBlock() {
	fuelBlock = document.createElement('div');
	fuelBlock.id = 'fuel';
	
	fuelLevel = document.createElement('span');
	fuelLevel.innerText = '100';
	fuelBlock.innerText = 'Fuel (liters): ';

	fuelBlock.appendChild(fuelLevel)

	infoBlock.appendChild(fuelBlock);

	decreaseFuel = setInterval(function(){
		fuelLevel.innerText = fuelLevel.innerText - 1;
		if(fuelLevel.innerText == '0'){
			lifesQuantity -= 1;
			removeLifes();
			createLifes();
			clearInterval(decreaseFuel);
		}
	}, 500)
}

/*============REMOVE FUNCTIONS==============*/
function removeInfoBlock() {
	infoBlock.remove();
}
function removeHealthBlock() {
	healthBlock.remove();
}

function removeFuelBlock() {
	fuelBlock.remove();
}

function removeScore() {
	score.remove();
}

function removeLifes() {
	lifes.remove();
}