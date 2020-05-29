// Створюэмо елементи Audio
var audio1 = new Audio();
var audio2 = new Audio();
var audio3 = new Audio();

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;

// ФУНКЦІЯ Включаємо задній фон (мелодію)
function music() {
    if (flag1 == false) {
        flag1 = true;
        //        надаємо кнопці зелений колір
        buttonSound.style.background = "green";
        //        вказуємо шлях до музики
        audio1.src = 'snd/melody/BackgroundMusic(minus&remake).mp3';
        //        вмикаємо музику
        audio1.autoplay = true;
        //        рівень гучності
        audio1.volume = 0.3;
        //        повторюємо після завершення
        audio1.loop = true;
    } else {
        flag1 = false;
        //        вимикаємо музику
        audio1.pause();
        //        надаємо кнопці червоного кольору
        buttonSound.style.background = "red";
    }
}

// ФУНКЦІЯ Включаємо/виключаємо звук двигуна
function voice() {
    if (flag2 == false) {
        flag2 = true;
        buttonSound2.style.background = "green";
    } else {
        flag2 = false;
        buttonSound2.style.background = "red";
    }
}

// ФУНКЦІЯ Включаємо/виключаємо звуки ефектів
function ding() {
    if (flag3 == false) {
        flag3 = true;
        buttonSound3.style.background = "green";
//        audio3.src = 'snd/Objects/Point.mp3';
//        audio3.autoplay = true;
    } else {
        flag3 = false;
//        audio3.pause();
        buttonSound3.style.background = "red";
    }
}

//ФУНКЦІЇ - створюємо кнопки увімкнення вимкнення звуків 3-х видів
function Sound1() {
    buttonSound = document.createElement("buttonSound");
    buttonSound.className = "buttonSound";
    span = document.createElement("span");
    buttonSound.appendChild(span);
    sound_field.appendChild(buttonSound);
}

function Sound2() {
    buttonSound2 = document.createElement("buttonSound2");
    buttonSound2.className = "buttonSound2";
    span = document.createElement("span");
    buttonSound2.appendChild(span);
    sound_field.appendChild(buttonSound2);
}

function Sound3() {
    buttonSound3 = document.createElement("buttonSound3");
    buttonSound3.className = "buttonSound3";
    span = document.createElement("span");
    buttonSound3.appendChild(span);
    sound_field.appendChild(buttonSound3);
}
