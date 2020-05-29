// ФУНКЦІЯ - створюємо перешкоди (сюди додаватимемо нові об'єкти)
function createObstacles() {
    // додаємо звичайну хмарку
    createCommonCloud();
    // додаємо грозову хмарку
    createThunderstormCloud();
    // додаємо дирижабль
    createAirShip();
    // додаємо повітряну кулю
    createBalloon();
    // додаємо бонус "поповнення палива"
    createFuelTank();
    // додаємо бонус "поповнення здоров'я"
    createHealth();
    // додаємо бонус "монетка"
    createCoins();
    // додаємо бонус "зірочка"
    createStars();
    // додаємо бонус "діамант"
    createDiamonds();
    //// !!!!!  додаємо нові бонуси і об'єкти сюди і створюємо відповідні нові функції у "createGameObjects" або тут
}

// ФУНКЦІЯ - створюємо об'єкт "дирижабль"
function createAirShip() {
    // створюємо блок div id="air_ship"
    let airShip = document.createElement('div');
    // додаємо клас air_ship
    airShip.className = 'air_ship';
    // додаємо дочірній елемент "дирижабль" до об'єкту верхнього заднього фону "Sky"
    backgroundSky.appendChild(airShip);
    // присвоюємо ширину об'єкта змінній airShipWidth
    let airShipWidth = airShip.clientWidth;
    // це генерує об'єкт за межами екрану справа (ширина ігрового поля + ширина об'єкту
    airShip.style.left = gameFieldWidth + airShipWidth + 'px';
    // визначаємо довільну позицію об'єкта по вертикалі (між 150 і 200 пікселів від верхнього краю ігрового поля
    airShip.style.top = random(positionTopAirShip, positionBottomAirShip) + 'px';
    // генеруємо об'єкт "дирижабль" з інтервалом appearanceAirShip = 21 сек (у variables.js)    
    let spawnAirShip = setInterval(function () {
        createAirShip();
        clearInterval(spawnAirShip);
    }, appearanceAirShips*1000);
    // переміщаємо дирижабль по горизонталі справа наліво із кроком в 1 піксель кожні 10 мс - регулюється ШВИДКІСТЬ AIRSHIP у variables.js
    let airShipMove = setInterval(function () {
        airShip.style.left = airShip.offsetLeft - 1 + 'px';
        // коли дирижабль виходить зліва за межі ігрового поля видаляємо його та очищаємо інтервал
        if (airShip.offsetLeft < -airShip.clientWidth) {
            airShip.remove();
            clearInterval(airShipMove);
        }
        // якщо кількість життів = 0, очищаємо генерацію дирижаблів щоб об'єкти не з'являлись на екрані EndScreen'
        if (lifesQuantity == 0) {
            clearInterval(spawnAirShip);
        }
    // значення таймеру задаємо у variables.js  
    }, speedAirShips)
    // перевіряємо зіткрення літака з дирижаблем
    collisionAirShip(plane, airShip);
}


// ФУНКЦІЯ - перевіряємо зіткнення з дирижаблем
function collisionAirShip(airPlane, object) {
    // створюємо інтервал у змінну collision
    let collision = setInterval(function () {
        // звіряємо праву координату літака по горизонталі поки об'єкт дирижабль не перетне її та +20 пікселів (бо картинки є більшими, ніж саме зображення об'єкта  
        if ((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft + sensitivityAirShipWidthRight) &&
            // і поки об'єкт не перетне ліву межу літака по горизонталі
            (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth + sensitivityAirShipWidthLeft) &&
            // і аналогічно по вертикалі з поправкою __ пікселів                       <- коригуємо ширину і висоту картинки дирижабля з пустим полем щоб зіткнення було коли літак вже перекриє дирижабль
            (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop + sensitivityAirShipHeigthTop) &&
            (airPlane.offsetTop <= object.offsetTop + object.clientHeight + sensitivityAirShipHeigthBottom)) {
            // встановлюємо інтервал для "мигання" літака при зіткненні, а також параметри "мигання" літака
            let invisible = setInterval(function () {
                plane.style.opacity = (plane.style.opacity == '0.1' ? '1' : '0.1');
                setTimeout(function () {
                    plane.style.opacity = 1;
                    // очищуємо інтервал "мигання" 2 сек
                    clearInterval(invisible);
                }, 2000)

            }, 100)
            // зменшуємо рівень життя на величину 50%       <- перенесено у variables.js
            healthLevel -= damageCollisionAirShip;
                // відтворюємо звук
                if (flag3 == true){
                audio3.src = 'snd/Objects/boom.mp3';
                audio3.autoplay = true;
                };
            // оновлюємо індикатор відображення рівня здоров'я видаляючи та створюючи його знову
            removeHealthBlock();
            createHealthBlock();
            // очищаємо інтервал collision
            clearInterval(collision);
            clearInterval(collision);
                object.style.height = "150px";
                object.style.backgroundImage = 'url(img/GameObjects/boom2.gif)';
            setTimeout(function(){
                object.remove();    
            },1000)
        }
    }, 10)
}

// ФУНКЦІЯ - створюємо об'єкт "повітряна куля"
function createBalloon() {
    // створюємо блок div id="balloon"
    let balloon = document.createElement('div');
    // додаємо клас balloon
    balloon.className = 'balloon';
    // додаємо дочірній елемент "повітряна куля" до об'єкту верхнього заднього фону "Sky"
    backgroundSky.appendChild(balloon);
    // присвоюємо ширину об'єкта змінній ballonWidth
    let ballonWidth = balloon.clientWidth;
    // це генерує об'єкт за межами екрану справа (ширина ігрового поля + ширина об'єкту
    balloon.style.left = gameFieldWidth + ballonWidth + 'px';
    // визначаємо довільну позицію об'єкта по вертикалі (між 50 і 500 пікселів від верхнього краю ігрового поля - задано у variables.js)
    balloon.style.top = random(positionTopBalloon, positionBottomBalloon) + 'px';
    // генеруємо об'єкт "повітряна куля" з інтервалом appearanceBalloon = __ сек (у variables.js)    
    let spawnBalloon = setInterval(function () {
            createBalloon();
            clearInterval(spawnBalloon);
    }, appearanceBalloon*1000);
    // переміщаємо повітряну кулю по горизонталі справа наліво із кроком в 1 піксель кожні 10 мс - регулюється ШВИДКІСТЬ Balloon у variables.js
    let ballonMove = setInterval(function () {
        balloon.style.left = balloon.offsetLeft - 1 + 'px';
        // коли куля виходить зліва за межі ігрового поля видаляємо його та очищаємо інтервал
        if (balloon.offsetLeft < -balloon.clientWidth) {
            balloon.remove();
            clearInterval(ballonMove);
        }
        // якщо кількість життів = 0, очищаємо генерацію куль щоб об'єкти не з'являлись на екрані EndScreen'
        if (lifesQuantity == 0) {
            clearInterval(spawnBalloon);
        }
    // значення таймеру задаємо у variables.js  
    }, speedBalloons)
    // перевіряємо зіткрення літака з повітряною кулею
    collisionBalloon(plane, balloon);
}

// ФУНКЦІЯ - перевіряємо зіткнення з повітряною кулею
function collisionBalloon(balloon, object) {
    // створюємо інтервал у змінну collision
    let collision = setInterval(function () {
        // звіряємо праву координату літака по горизонталі поки об'єкт куля не перетне її та всі інші краї об'єкту'
        if ((balloon.offsetLeft + balloon.clientWidth >= object.offsetLeft + sensitivityBalloonWidthRight) &&
            (balloon.offsetLeft <= object.offsetLeft + object.clientWidth + sensitivityBalloonWidthLeft) &&
            (balloon.offsetTop + balloon.clientHeight >= object.offsetTop + sensitivityBalloonHeigthTop) &&
            (balloon.offsetTop <= object.offsetTop + object.clientHeight + sensitivityBalloonHeigthBottom)) {
            // встановлюємо інтервал для "мигання" літака при зіткненні, а також параметри "мигання" літака
            let invisible = setInterval(function () {
                plane.style.opacity = (plane.style.opacity == '0.1' ? '1' : '0.1');
                setTimeout(function () {
                    plane.style.opacity = 1;
                    // очищуємо інтервал "мигання" 2 сек
                    clearInterval(invisible);
                }, 2000)
            }, 100)

            // зменшуємо рівень життя на величину 50%       <- перенесено у variables.js
            healthLevel -= damageCollisionBalloon;
                if (flag3 == true){
                audio3.src = 'snd/Objects/boom.mp3';
                audio3.autoplay = true;
                };
            // оновлюємо індикатор відображення рівня здоров'я видаляючи та створюючи його знову
            removeHealthBlock();
            createHealthBlock();
            // очищаємо інтервал collision  
            clearInterval(collision);
                object.style.backgroundImage = 'url(img/GameObjects/boom1.gif)';
            setTimeout(function(){
                object.remove();    
            },1000)

        }
    }, 10)
}

