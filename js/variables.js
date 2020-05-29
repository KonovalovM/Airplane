// ініціалізуємо у змінній ігрове поле та його ширину і висоту
let gameField = document.querySelector('#game_field');
let gameFieldWidth = gameField.clientWidth;
let gameFieldHeight = gameField.clientHeight;

// РІЗНОМАНІТНІ КОНСТАНТИ
//
// ====== ЧАС АНІМАЦІЇ СТАРТОВОЇ КНОПКИ - 2 сек
let durationAnimationTimeStartButton = 2;

// ====== ЧАС ВІДОБРАЖЕННЯ ІНФОРМАЦІЇ З РАХУНКОМ ГРИ - 3 сек
let durationGameOverScreen = 3;

// ====== ІНТЕРВАЛИ ПЕРЕГЕНЕРАЦІЇ НОВИХ ОБ'ЄКТІВ
//
// час появи хмар з різним інтервалом (від 3 до 6 сек)
let appearanceCloudCommonMin = 3;
let appearanceCloudCommonMax = 6;
// час появи грозових хмар з різним інтервалом (від 6 до 9 сек)
let appearanceCloudThunderstormMin = 6;
let appearanceCloudThunderstormMax = 9;
// час появи нових дирижаблів кожні 21 сек
let appearanceAirShips = 21;
// час появи нових повітряних куль кожні 18 сек
let appearanceBalloon = 18;
// поява нових бонусів "поповнення палива" кожні 20 сек
let appearanceFuelTanks = 20;
// поява нових бонусів "поповнення здоров'я" кожні 15 сек
let appearanceHealth = 15;
// поява нових бонусів "монета" кожні 2 сек
let appearanceCoin = 2;
// поява нових бонусів "зірочка" кожні 25 сек
let appearanceStar = 25;


// ====== ШВИДКІСТЬ ПЕРЕСУВАННЯ ОБ'ЄКТІВ
// 
// швидкість пересування хмар (1 - дуже швидко, 100 - дуже повільно)
let speedCloudCommon = 10;
// швидкість пересування хмар (1 - дуже швидко, 100 - дуже повільно)
let speedCloudThunderstorm = 15;
// швидкість пересування дирижабля (1 - дуже швидко, 100 - дуже повільно)
let speedAirShips = 13;
// швидкість пересування повітряних куль (1 - дуже швидко, 100 - дуже повільно)
let speedBalloons = 17;
// швидкість пересування каністри з паливом (1 - дуже швидко, 100 - дуже повільно)
let speedFuelTanks = 5;
// швидкість пересування бонусу "поповнення здоров'я (1 - дуже швидко, 100 - дуже повільно)
let speedHealth = 7;
// швидкість пересування бонусу "монета" (1 - дуже швидко, 100 - дуже повільно)
let speedCoin = 10;
// швидкість пересування бонусу "зірочка" (1 - дуже швидко, 100 - дуже повільно)
let speedStar = 10;


// ====== РІВЕНЬ ПОШКОДЖЕННЯ ПРИ ЗІТКНЕННІ ІЗ ОБ'ЄКТАМИ
//
// пошкодження при зіткненні з хмарою "здоров'я"
let damageCollisionCloudCommon = 0;
// пошкодження при зіткненні з грозовою хмарою -25% "здоров'я"
let damageCollisionCloudThunderstorm = 25;
// пошкодження при зіткненні з дирижаблем -50% "здоров'я"
let damageCollisionAirShip = 50;
// пошкодження при зіткненні з повітряною кулею -50% "здоров'я"
let damageCollisionBalloon = 50;


// ====== ЗНАЧЕННЯ ПОПОВНЕННЯ ПІСЛЯ ПІДБОРУ БОНУСІВ
//
// відновлення після підбору бонусу "поповненням палива" - відновлює до 100%
let recoveryLevelFuelTank = 100;
// бонус "монета" - додає таке значення очок 
let refillLevelCoin = 1;
// бонус "зірочка" - додає таке значення очок
let refillLevelStar = 25;


// ====== МЕЖІ ПОЯВИ НОВИХ ОБ'ЄКТІВ - горизонтальні полоси на ігровому полі від верхнього поля
//
// Хмара звичайна - CloudCommon
let positionTopCloudCommon = 10;
let positionBottomCloudCommon = 300;
// Хмара грохова - CloudThunderstorm
let positionTopCloudThunderstorm = 100;
let positionBottomCloudThunderstorm =200;


// Дирижабль - AirShip - від 150 до 200 pxs від верхнього краю
let positionTopAirShip = 150;
let positionBottomAirShip = 200;
// Повітряна куля - Balloon - від 50 до 500
let positionTopBalloon = 50;
let positionBottomBalloon = 500;
//
// Бонус - FuelTank - від 150 до 200 pxs від верхнього краю     
let positionTopFuelTank = 200;
let positionBottomFuelTank = 440;
//
// Бонус - Health - від 10 до 500 pxs від верхнього краю
let positionTopHealth = 200;
let positionBottomHealth = 440;
//
// Бонус - Coin - від 100 до 500 pxs від верхнього краю
let positionTopCoin = 100;
let positionBottomCoin = 500;
//
// Бонус - Star - від 50 до 150 pxs від верхнього краю
let positionTopStar = 50;
let positionBottomStar = 150; 
// 
// Бонус - Diamond 450, 550
let positionTopDiamond = 450;
let positionBottomDiamond = 550;


// ====== ЧУТЛИВІСТЬ ЗІТКНЕННЯ З ОБ'ЄКТАМИ - поправка на перекривання зображення
//
// Хмара грозова - допуск по ширині і висоті
let sensitivityCloudThunderstormWidthRight = 20;
let sensitivityCloudThunderstormWidthLeft = 20;
let sensitivityCloudThunderstormHeigthTop = 80;
let sensitivityCloudThunderstormHeigthBottom = 40;
//
// Дирижабль - допуск по ширині і висоті
let sensitivityAirShipWidthRight = 20;
let sensitivityAirShipWidthLeft = 20;
let sensitivityAirShipHeigthTop = 20;
let sensitivityAirShipHeigthBottom = 0;
// Повітряна куля - допуск по ширині і висоті
let sensitivityBalloonWidthRight = 5;
let sensitivityBalloonWidthLeft = 5;
let sensitivityBalloonHeigthTop = 5;
let sensitivityBalloonHeigthBottom = 0;


// ФУНКЦІЯ визначення довільного числа від MIN до MAX діапазону
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// ФУНКЦІЯ ПІДКЛЮЧЕННЯ ЗВУКУ з діями play, stop, remove
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
    this.remove = function(){
    	this.sound.remove();
    }
}

// ФУНКЦІЯ ГЕНЕРАЦІЇ ОБ'ЄКТІВ ПО СИНУСОЇДІ (not used)
function spawnElementsSin(bonus) {
    // for (var i = 0; i <= 12; i++) {
    //     bonus.style.top = 10 + Math.sin(2 * Math.PI/12 * i) * 100 +"px";    
    // }
}
    
// ФУНКЦІЯ ПРИСТОСУВАННЯ ЗОБРАЖЕННЯ ПІД РОЗДІЛЬНУ ЗДАТНІСТЬ МОНІТОРІВ
window.addEventListener('load',CheckBrowserSize,false);
function CheckBrowserSize() 
{
    let ResX = document.body.offsetWidth;
    // console.log(ResX)

    if(ResX <= 1900 && ResX >= 1602){
        // console.log(ResX);
        startPlanePosLeft = 600 + 'px';
    }
    if(ResX <= 1602 && ResX >= 1500){
        // console.log(ResX);
        startPlanePosLeft = 500 + 'px';
    }
    if(ResX < 1500 && ResX >= 1420){
        // console.log(ResX);
        startPlanePosLeft = 420 + 'px';
    }
    if(ResX < 1420 && ResX >= 1270){
        // console.log(ResX);
        startPlanePosLeft = 365 + 'px';
    }
}