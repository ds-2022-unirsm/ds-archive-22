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


let cerchi = [];
let numeroCerchi = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  for (let i = 0; i < numeroCerchi; i++) {
    cerchi.push(new disegna_cerchio(i));
  }

}

function draw() {
  
  for (let i = 0; i < cerchi.length; i++) {
    cerchi[i].display();
  }
  //noLoop();
}

function disegna_cerchio(_id) {
  this.id = _id;
  this.x = 250;
  this.y = 0;
  this.spazio = 100;
  this.numero = 100;
  this.tx1 = 200 * noise(random(5));
  this.tx2 = 400 * noise(random(6));

  this.display = function () {
    for (var i = 0; i < this.numero; i++) {
      push();
      rectMode(CENTER);
      ellipseMode(CENTER);
      translate(width / 2, height / 2);
      rotate((TWO_PI * i) / this.spazio);
      if (random(1) < 0.5) {
        push();
		translate(this.tx1, 0);
        rotate(millis() / 1000);
        fill(0,0, 0);
        noStroke();
        rect(this.x, this.y, 4);
        pop();
      } else {
        push();
        translate(this.tx2, 0);
        rotate(millis() / 1000);
        fill(0, 0, 0)
        noStroke();
        ellipse(this.x, this.y, 2);
        pop();
      }
      pop();
    }
  };

}
