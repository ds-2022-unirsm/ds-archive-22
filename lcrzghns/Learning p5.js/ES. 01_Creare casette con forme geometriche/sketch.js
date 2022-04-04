function setup(){
	createCanvas(600, 600);
}

function draw(){
	background(233, 245, 250);
	for (var x = 10; x < 600; x = x+50) {
		for (var y = 5; y < 600; y = y+50) {
			push();
			translate(x, y);			
	  		drawHouse();
		    pop();
		}	
	}	
}

function drawHouse() {
	triangle(15, 0, 0, 15, 30, 15); //tetto
    fill (133, 145, 200); //colore pareti
	rect(0, 15, 30, 25); //pareti
    fill (33, 45, 200); //colore porta
	rect(12, 30, 10, 10); //porta
}
