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


var w, h;
var quanti = 1000;
var d = 800;
var c = [];
var speedMax = 3;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));

  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
  rectMode(CENTER);
  frameRate(60); // Attempt to refresh at starting FPS
}

function draw() {
  background(0, 10);
  // per tutti i camminatori chiama i diversi metodi utili
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }

  // move the origin to the pivot point
  translate(w / 2, h / 2);

  // then rotate the grid around the pivot point by a
  // number of degrees equal to the frame count of the sketch
  rotate(radians(frameCount));

  // and draw the square at the origin
  fill(0);
  stroke(255);
  strokeWeight(0.7);
  rect(0, 0, w / 2, 10);
}

// classe
function Camminatore(_id) {
  // costruttore
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.speedX = random(200, speedMax);
  this.speedY = random(200, speedMax);
  this.noiseX = random(200);
  this.noiseY = random(200);

  // metodo move
  this.move = function () {
    //if (random(1) >= 0.5) this.dirX *= -1;
    //if (random(1) >= 0.5) this.dirY *= -1;
    this.x = noise(this.noiseX) * w;
    this.y = noise(this.noiseY) * h;
    this.noiseX += 0.15 * this.speedX;
    this.noiseY += 0.15 * this.speedY;
  };

  // metodo display
  this.display = function () {
    fill(
      325,
      10 * noise(this.noiseX),
      255,
      10 * noise(this.noiseX + 10),
      255 * noise(this.noiseX + 30)
    );
    // stroke(0);
    // strokeWeight(1.5);
    ellipseMode(CENTER);
    point(this.x, this.y, windowHeight / 2, windowWidth / 2);
  };
}
