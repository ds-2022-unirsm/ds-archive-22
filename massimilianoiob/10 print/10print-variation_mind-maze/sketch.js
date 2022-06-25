//bomdimax
//10print_mind-maze
//--------------------------------------------------------------------------------

let x = 0;
let y = 0;
let spacing = 25;
let sweight = 25;
let width = 0;
let height = 10;


function setup() {
	createCanvas(800, 800);
    background(255);
} 

function draw() {
	stroke(0);
	strokeWeight(10);
	strokeCap(PROJECT);
	 // iclina la linea se 
	if(random(100) < 20) {
        //disegna con inclinazione a destra o siistra 
		line(x, y, x + spacing, y + spacing);
	} else {
       
		line(x, y + spacing, x + spacing, y);
	}
  
  
  
    //disegnna sull'asse y
	y= y + spacing;
	
    //quando la riga finisce continua a riempire la pagina
	if(y > width) {
		y = 0;
		x = x + spacing;
	}
  
    //comicia da capo quandop si riempie la pagina
	if( x > height - (2 * spacing)){
		reset();
	}
}

 function reset(){
	createCanvas(width = windowWidth, height = windowHeight - spacing);
	background(255);
	x = 0;
	y = 0;
	draw();
}
window.onresize = reset;