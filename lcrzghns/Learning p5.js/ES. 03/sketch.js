function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
}

function draw(){
	background(240);

	translate(width/2, height/2);
	for (var i = 0; i < 8; i++) {
		push();
		rotate(PI * i / 8);
		var tx = 250 * noise(0.01*frameCount); //ampiezza del disegno
		translate(tx, 0);
        fill(255);
		rect(0, 0, 20, 20);
		for (var j = 0; j < 8; j++) {
			push();
			rotate(TWO_PI * j / 8);
			var rx = 60 * noise(0.01*frameCount + 10);
            fill(230,55,44);
			rect(rx, 0, 8, 8);
			pop();
		}		
		translate()
		pop();
	}
        fill(230,55,44);
        ellipse(-35, -50, 25, 50);
        fill(230,55,44);
        ellipse(40, -50, 25, 50);
}
