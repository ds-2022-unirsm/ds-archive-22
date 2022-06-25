//bomdimax
//glitch series
//---------------------------------------------------------------------------

let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	glitch = new Glitch();
	glitch.loadType('jpg')
	glitch.loadImage('maschera.jpg')
	imageMode(CENTER)
}

function draw() {
	glitch.resetBytes(); // resetta a ogni giro il quantitativo di glitch

	glitch.randomBytes(5);
	glitch.buildImage(function(img) {
		background(0); 
		image(img, width / 2
            , height * .20
             )
	});


	// aggiungi il numero di glitch
	glitch.randomBytes(100);
	glitch.buildImage(function(img) {
		image(img, width / 2, height * .5)
	});

	// scambia i glitch
	glitch.randomBytes(500);
		glitch.buildImage(function(img) {
		image(img, width / 2, height * .80)
	});

}