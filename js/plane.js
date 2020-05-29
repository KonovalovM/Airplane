let plane;
let planeMove;
let planeDownMove;
let planeUpMove;
let planeRemovePoint;
let planeSound;

function createPlane() {
	plane = document.createElement('div');
	plane.id = 'plane';

	gameField.appendChild(plane);

	planeRemovePoint = gameFieldHeight - plane.clientHeight;	

	planeSound = new sound('snd/Engine/PlaneFlying.mp3');
	planeSound.play();
    plane.style.left = "150px";        
}
 
let flag = true;

document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;

function onKeyDown(event) {
	if(event.keyCode == 27){
		alert('pause')
	}
	if (event.code == 'Space' && flag) {

    	clearInterval(planeMove);
		clearInterval(planeDownMove);
		planeUpMove = setInterval(function(){
			if(plane.offsetTop >= 18){
				plane.style.top = plane.offsetTop - 1 + 'px';				
			} 
			plane.style.transform = "rotateZ(-15deg)";
			plane.style.transition = 'transform 0.3s';
		}, 10)
		planeSound.remove();
		planeSound = new sound('snd/Engine/PlaneThrottle.mp3');
        if (flag2 == true) {
		planeSound.play()
        };
		flag = false;
  }
}

function onKeyUp(event) {
if (event.code == 'Space') {
  	clearInterval(planeUpMove);
	
		planeDownMove = setInterval(function(){
			plane.style.top = plane.offsetTop + 1 + 'px';
			
			if (plane.offsetTop > planeRemovePoint) {
				plane.remove();
				lifesQuantity -= 1;
				if(lifesQuantity != 0){
					points = points;
					console.log(points)
				}
				removeLifes();

				clearInterval(planeDownMove);
			}

			if (plane.offsetTop > 400){
				plane.style.transition = 'transform 1.4s';
				plane.style.transform = "rotateZ(20deg)";

			} else{
				plane.style.transition = 'transform 0.8s';
				plane.style.transform = "rotateZ(10deg)";
			}
		}, 10);

		planeSound.remove();
    if (flag2 == true) {
		planeSound = new sound('snd/Engine/PlaneIdling.mp3');
    }
		planeSound.play()
		flag = true;
	}	
}
