//створюємо блок з інформацією про керування
function control() {
    controls = document.createElement("div");
    controls.id = "controls";
    gameField.appendChild(controls);
}
//створюємо кнопку для виведення інформації по керуванню
function btnControls() {
    buttonControls = document.createElement("buttonControls");
    buttonControls.className = "buttonControls";
    span = document.createElement("span");
    buttonControls.appendChild(span);
    sound_field.appendChild(buttonControls);
}
//виводимо інформацією про керування
function info() {
    if (flag4 == false) {
        flag4 = true;
        buttonControls.style.background = "green";
        controls.style.width = "1000px";
        controls.style.height = "900px";
        controls.style.top = "000px";
        controls.style.left = "50px";
    } else {
        //приховуємо інформацією про керування
        flag4 = false;
        buttonControls.style.background = "grey";
        controls.style.width = "0px";
        controls.style.height = "0px";
        controls.style.top = "300px";
        controls.style.left = "-100px";
    }
}
