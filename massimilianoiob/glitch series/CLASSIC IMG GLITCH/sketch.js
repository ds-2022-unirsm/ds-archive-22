//bomdimax
//glitch series

//---------------------------------------------------------------------------

let glitch;

function setup() {
	createCanvas(500, 500);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('img profilo.jpg', function(im){
		glitch.loadImage(im);
	});
}

function draw() {
	glitch.resetBytes();

	glitch.replaceBytes(10, 15); // iverti i blocchetti
	glitch.randomBytes(100); //aumeta la velocità del glitch aggiugedo blocchi

	glitch.buildImage();
	image(glitch.image, width/2, height/2)
}