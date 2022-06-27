// -
// 10print_variazione 2 by Chiara Guiducci [background, linee]
// 2022 © Chiara @guiduc, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —

let x = 0;
let y = 0;
let spacing = 35;
let sweight = 0.5;

function setup() {
    createCanvas(windowWidth,windowHeight);
	background(197,232,235);
} 

function draw() {
	let colr = (251,248,183);
	noStroke();
	
	if(random(1) < 1) {
		fill(colr);
		//triangle(x-spacing, y-spacing, x, y, x-spacing, y+spacing);
		stroke(colr);
		strokeWeight(sweight);
		strokeCap(ROUND);
		strokeJoin(ROUND);
		line(x, y, x+spacing, y+spacing);
	} else {
		fill(colr);
		//triangle(x+spacing, y+spacing, x, y, x+spacing, y-spacing);
		stroke(colr);
		strokeWeight(sweight);
		strokeCap(ROUND);
		strokeJoin(ROUND);
		line(x, y+spacing, x+spacing, y);
	}
	x = x + spacing;
	sweight = sweight + 0.02;
	
	if(x > width) {
		x = 0;
		y = y + spacing;
	}
}