// ФАЙЛ ДЛЯ ОПИСУВАННЯ ДІЙ З ОБ'ЄКТАМИ ХМАРАМИ
//*** хмаринок можна зробити кількох видів, ті що зараз закріплені жорстко у фоні BackgroundTop та організувати їх довільну появу
//*** але небагато - щоб не було свалки з хмар


// ФУНКЦІЯ створення грозової хмари (*** вона впливає на здоров'я літака)
function createThunderstormCloud(){
	// створюємо блок div з класом "cloud_thunderstorm" (хмара грозова) та додаємо її на фон Sky зі всіма іншими задніми фонами
	let cloudThunderstorm = document.createElement('div');	
	cloudThunderstorm.className = 'cloud_thunderstorm';
	backgroundSky.appendChild(cloudThunderstorm);

	// визначаємо ширину хмаринки у змінну cloudThunderstormWidth
	let cloudThunderstormWidth = cloudThunderstorm.clientWidth;

	// описуємо появу хмарки з-за правого краю ігрового поля
	cloudThunderstorm.style.left = gameFieldWidth + cloudThunderstormWidth + 'px';
	// описуємо довільну появу хмари по вертикалі (між 10 і 300 pxs) - задано у variables.js
	cloudThunderstorm.style.top = random(positionTopCloudThunderstorm, positionBottomCloudThunderstorm) + 'px';

	// генеруємо довільну появу хмар з різним інтервалом часу (від 3 до 6) - задано у variables.js
	let randomCloudThunderstormSpawn = random(appearanceCloudThunderstormMin, appearanceCloudThunderstormMax) * 1000;
	
	// задаємо інтервал часу появи нових хмаринок у інтревалі randomCloudThunderstormSpawn
	let spawnThunderstormClouds = setInterval(function(){
		createThunderstormCloud();
		clearInterval(spawnThunderstormClouds);
	}, randomCloudThunderstormSpawn);

	// задаємо рух хмаринок на 1 піксель вліво з інтервалом 10мс - задається у variables.js 
	let cloudThunderstormMove = setInterval(function(){
		cloudThunderstorm.style.left = cloudThunderstorm.offsetLeft - 1 + 'px';

		// якщо хмара повністю виходить за межі екрану ми її видаляємо
		if(cloudThunderstorm.offsetLeft < -cloudThunderstorm.clientWidth){
			cloudThunderstorm.remove();
			clearInterval(cloudThunderstormMove);
			
			// ініціалізуємо у змінну грозову хмару						
			let cloudThunderstormExists = document.querySelector('.cloud_thunderstorm');	
			// якщо хмаринки не існує, генеруємо нову
			if(cloudThunderstormExists == null){
				createThunderstormCloud();
			}
		}
		// якщо кількість життів = 0, припиняємо генерувати хмари очисткою інтервалу	
		if(lifesQuantity == 0){
			clearInterval(spawnThunderstormClouds);
		}
	// значення інтервалу задано у variables.js		
	}, speedCloudThunderstorm)
	// перевіряємо зіткнення літака з хмарою
	collisionCheckThunderstormCloud(plane, cloudThunderstorm);
}


// ФУНКЦІЯ перевірки зіткнення з грозовою хмарою
function collisionCheckThunderstormCloud(airPlane, object) {
	// створюємо інтервал у змінну collision	
    let collision = setInterval(function(){
   		// звіряємо координату правого краю літака по горизонталі поки об'єкт "хмара" не перетне її з поправкою на пусті пікселі в картинці (із variables.js)
		if((airPlane.offsetLeft + airPlane.clientWidth >= object.offsetLeft + sensitivityCloudThunderstormWidthRight)
			 && (airPlane.offsetLeft <= object.offsetLeft + object.clientWidth - sensitivityCloudThunderstormWidthLeft) 
			 && (airPlane.offsetTop + airPlane.clientHeight >= object.offsetTop + sensitivityCloudThunderstormHeigthTop) 
			 && (airPlane.offsetTop <= object.offsetTop + object.clientHeight - sensitivityCloudThunderstormHeigthBottom)){

			// зазначаємо інтервал "мигання літака" при зіткненні			
			let invisible = setInterval(function(){
				plane.style.opacity = (plane.style.opacity == '0.1' ? '1' : '0.1');
				setTimeout(function(){
					plane.style.opacity = 1;
					clearInterval(invisible);
				}, 1000)
			}, 100)
			
			// понижуємо рівень життя на 25			
			healthLevel -= damageCollisionCloudThunderstorm;
				// відтворюємо звук
                if (flag3 == true){
                audio3.src = 'snd/Objects/Thunder.mp3';
                audio3.autoplay = true;
                };
           	// оновлюємо рівень здоров'я видаляючи та знову створюючи його
			removeHealthBlock();
			createHealthBlock();	
            // очищуємо інтервал	
			clearInterval(collision);
		}
	// кожних 10 мс	
	},10)
}

// ФУНКЦІЯ створення звичайної хмари (*** вона не впливає на здоров'я літака, але це треба буде змінити додавши інші види хмар)
function createCommonCloud(){
	// створюємо блок div з класом "cloud_common" (хмара звичайна) та додаємо її на фон Sky зі всіма іншими задніми фонами
	let cloudCommon = document.createElement('div');	
	cloudCommon.className = 'cloud_common';
	backgroundSky.appendChild(cloudCommon);

	// визначаємо ширину хмаринки у змінну cloudCommonWidth
	let cloudCommonWidth = cloudCommon.clientWidth;

	// описуємо появу хмарки з-за правого краю ігрового поля
	cloudCommon.style.left = gameFieldWidth + cloudCommonWidth + 'px';
	// описуємо довільну появу хмари по вертикалі (між 10 і 300 pxs) - задано у variables.js
	cloudCommon.style.top = random(positionTopCloudCommon, positionBottomCloudCommon) + 'px';

	// генеруємо довільну появу хмар з різним інтервалом часу (від 3 до 6) - задано у variables.js
	let randomCloudSpawn = random(appearanceCloudCommonMin, appearanceCloudCommonMax) * 1000;
	
	// задаємо інтервал часу появи нових хмаринок у інтревалі randomCloudSpawn
	let spawnCommonClouds = setInterval(function(){
		createCommonCloud();
		clearInterval(spawnCommonClouds);
	}, randomCloudSpawn);

	// задаємо рух хмаринок на 1 піксель вліво з інтервалом 10мс - задається у variables.js 
	let cloudCommonMove = setInterval(function(){
		cloudCommon.style.left = cloudCommon.offsetLeft - 1 + 'px';

		// якщо хмара повністю виходить за межі екрану ми її видаляємо
		if(cloudCommon.offsetLeft < -cloudCommon.clientWidth){
			cloudCommon.remove();
			clearInterval(cloudCommonMove);
			
			// ініціалізуємо у змінну звичайну хмару						
			let cloudExists = document.querySelector('.cloud_common');	
			// якщо хмаринки не існує, генеруємо нову
			if(cloudExists == null){
				createCommonCloud();
			}
		}
		// якщо кількість життів = 0, припиняємо генерувати хмари очисткою інтервалу	
		if(lifesQuantity == 0){
			clearInterval(spawnCommonClouds);
		}
	// значення інтервалу задано у variables.js		
	}, speedCloudCommon)
}