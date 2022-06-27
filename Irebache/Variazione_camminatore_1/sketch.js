
var w, h;
var quanti = 1000;
var d = 40;
var c = [];
var speedMax = 0.02;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(250, 200, 200);
  // per tutti i camminatori chiama i diversi metodi utili 
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

// classe
function Camminatore(_id) {
  // costruttore
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.speedX = random(2, speedMax);
  this.speedY = random(40, 1);
  this.noiseX = random(0.0002);
  this.noiseY = random(1);

  // metodo move
  this.move = function() {
    // if (random(1) >= 0.5) this.dirX *= -1;
    // if (random(1) >= 0.5) this.dirY *= -1;
    this.x = noise(this.noiseX) * w
    this.y = noise(this.noiseY) * h
    this.noiseX += 0.001 * this.speedX;
    this.noiseY += 0.001 * this.speedY;
  }
  
  // metodo display
  this.display = function() {
    fill(200 * noise(this.noiseX), 10 * noise(this.noiseX + 10), 200 * noise(this.noiseX + 30));
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, d);

  }
}