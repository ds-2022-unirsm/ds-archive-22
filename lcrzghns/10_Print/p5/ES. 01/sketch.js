let x = 0;
let y = 0;
let spacing = 25;
let sweight = 10;
let width = 0;
let height = 0;


function setup() {
	createCanvas(width = windowWidth, height = windowHeight);
    background(0);
} 

function draw() {
	stroke(random(10,255), random(10,255), random(10,255));
	strokeWeight(sweight);
	strokeCap(PROJECT);
	strokeJoin(MITER);
	if(random(1) < 0.5) {
        //disegna linea inclinata a sx
		line(x, y, x + spacing, y + spacing);
	} else {
        //disegna linea inclinata a dx
		line(x, y + spacing, x + spacing, y);
	}
  
    //procedi a disegnare sulla riga
	x = x + spacing;
	
    //quando la riga finisce, vai a capo
	if(x > width) {
		x = 0;
		y = y + spacing;
	}
  
    //quando h del canvas si riempie, reset
	if( y > height - (2 * spacing)){
		reset();
	}
}

 function reset(){
	createCanvas(width = windowWidth, height = windowHeight - spacing);
	background(random(255));
	x = 0;
	y = 0;
	draw();
}
window.onresize = reset;
