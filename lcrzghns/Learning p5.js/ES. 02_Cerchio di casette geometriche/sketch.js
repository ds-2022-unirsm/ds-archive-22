
function setup() {
	createCanvas(600, 600);
    rectMode(CENTER); //il centro diventa il centro del rect
}

function draw(){
	background(255,160,122);

	translate(width/2, height/2); //centra le casette ponendo il centro al centro della finestra
	for (var i = 0; i < 10; i++) {
	push();
	rotate(TWO_PI * i / 10);
    translate(200,0);
      
      //cerchio di casette
      
      fill (220,20,60); //colore tetto
      triangle(-23, -17.5, 0, -35, 23, -17.5); //tetto
      fill (133, 145, 200); //colore pareti
      rect(0, 0, 45, 35); //pareti
      fill (33, 45, 200); //colore porta
      rect(0, 12, 6, 11); //porta
      
      fill(178,34,34); //colore finestra 01
      rect(-12, -7, 6, 10); //finestra 01
      fill(255); //colore finestra 02
      rect(0, -7, 6, 10); //finestra 02
      fill(250,128,114); //colore finestra 03
      rect(12, -7, 6, 10); //finestra 03 
      
      for (var j = 0; j < 6; j++) {  //quadratini attorno
			push();
			rotate(TWO_PI * j / 6);
            fill(255);
			rect(40, 30, 8, 8);
			pop();
		}	
      translate()
      pop();
	}
}
