// ФАЙЛ З ФОНОВИМИ ЗОБРАЖЕННЯМИ ДЛЯ РІВНІВ ГРИ
// описуємо змінні для ініціалізації різних шарів фонового зображення, яке рухається:
// Sky (самий верхній - тільки фон неба суцільного кольору, або градієнтний перехід)
// Top (верхній найповільніший декоративний шар для високолітаючих об'єктів)
// Middle (середній динамічний шар для різних об'єктів) - з такою швидкістю відбувається ілюзія гри
// 			сюди можна добавити вітрогенератори але з точною прив'язкою до координат фону)
// Bottom (нижній шар - найшвидший для ілюзії швидкості руху літака)
//			з нього можна вирізати дерева та додати поодинокі GIF-дерева для створення об'єктів зіткнення на землі
// ініціалізуємо змінні що відповідають за 4 задніх фони
let backgroundSky, 
	backgroundTop,
	backgroundMiddle,
	backgroundBottom;

// ФУНКЦІЯ - створення заднього фону гри комбінацією з 4 шарів фонів
// перетворюємо кожний елемент 'div' з відповідним id у змінну та додаємо 3 дочірні елементи у Sky, який у свою чергу додаємо в ігрове поле
function createBackground() {
	
	backgroundSky = document.createElement('div');
	backgroundSky.id = 'backgroundSky';
	gameField.appendChild(backgroundSky);

	backgroundTop = document.createElement('div');
	backgroundTop.id = 'backgroundTop';
	backgroundSky.appendChild(backgroundTop);

	backgroundMiddle = document.createElement('div');
	backgroundMiddle.id = 'backgroundMiddle';
	backgroundSky.appendChild(backgroundMiddle);

	backgroundBottom = document.createElement('div');
	backgroundBottom.id = 'backgroundBottom';
	backgroundSky.appendChild(backgroundBottom);
}

// ФУНКЦІЯ - видалення заднього фону гри кожного з 4 шарів фонів
function removeBackground() {
	backgroundSky.remove();
	backgroundTop.remove();
	backgroundMiddle.remove();
	backgroundBottom.remove();
}