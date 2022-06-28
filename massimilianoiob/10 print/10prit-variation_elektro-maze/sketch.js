//bomdimax
//10print_elektro-maze
//--------------------------------------------------------------------------------

let x = 0;
let y = 0;
let g = 20;
var colore = 255;

function setup() {
	createCanvas(800, 800 );
	background(255);
    strokeJoin(MITER);
  strokeCap(SQUARE);


}

function draw() {	
  
	if(y < height) {
      
     strokeWeight(5);
//disegna quadrato
		if(random(1) < 0.5) {
    square (x + g, y + g, g)
          stroke (random(255-colore));
		} else {
		line(x, y + g, x + g/100, y/100);
		}

		x = x + g;

		if(x > width) {
			x = 0;
			y = y + g;
		}
      //quado fiisce il foglio comicia di nuovo cambiando colore
    if (y >= height) {
    y = 0;
    background(random(255));
    g = 20;
    }
  }
}
