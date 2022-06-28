//      ___      ___      ___   ___      ___     ___
//     /\  \    /\  \    /\__\ /\  \    /\  \   /\  \
//    /::\  \  /::\  \  /:/  //::\  \  _\:\  \  \:\  \
//   /\:\:\__\/::\:\__\/:/__//::\:\__\/\/::\__\ /::\__\
//   \:\:\/__/\/\::/  /\:\  \\/\::/  /\::/\/__//:/\/__/
//    \::/  /   /:/  /  \:\__\  \/__/  \:\__\  \/__/
//     \/__/    \/__/    \/__/          \/__/
//-------------------------------------------------------
//2022 © Salvo Pitingaro, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
//github.com/ds-2022-unirsm — github.com/fupete
//Educational purposes, MIT License, 2022, San Marino


//PORTING COMMODORE 64 TO P5.js
//@salpit

let x = 0;
let y = 0;
let g = 60;
var colore = 255;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
    strokeJoin(ROUND);
  strokeCap(ROUND);


}

function draw() {	
  
	if(y < height) {
      
     strokeWeight(10);

		if(random(2) < 1) {
    point (x + g/2, y + g/2, g)
          stroke (random(255-colore));
		} else {
		line(x, y + g*100, x + g/100, y/100);
		}

		x = x + g;

		if(x > width) {
			x = 0;
			y = y + g;
		}
      
    if (y >= height) {
    y = 0;
    background(255);
    g = 15 + random(width);
    }
  }
}


