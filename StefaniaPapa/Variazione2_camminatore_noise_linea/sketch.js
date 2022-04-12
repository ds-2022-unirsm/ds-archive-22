var w, h;
var quanti = 10; 
var c = [];
var speedMax = 0.2;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  
  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
    background(0);
  }
}

function draw() {
  // per tutti i camminatori chiama i diversi metodi utili 
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }

  if (frameCount % 400 == 0) {
    background(220);
  }
}

// classe
function Camminatore(_id) {

  // costruttore
  this.id = _id;
  this.x = random(w);
  this.y = random(h);
  this.speedX = random(10, speedMax);
  this.speedY = random(10, speedMax);
  this.noiseX = random(30);
  this.noiseY = random(0);
  this.qualeAltro = 0; // la linea dopo

  // metodo move
  this.move = function() {
    this.x = noise(this.noiseX) * w
    this.y = noise(this.noiseY) * h
    this.noiseX += 0.001 * this.speedX;
    this.noiseY += 0.001 * this.speedY;
  }

  // metodo display
  this.display = function() {
    
    strokeWeight(0.1);
    
   stroke(map(this.x, 0, w, 40, 25), map(this.y, 0, h, 100, 100), map(this.y, 0, h, 10, 220));
    line(this.x, this.y, c[this.qualeAltro].x, c[this.qualeAltro].y);
    noFill();
    rectMode(CENTER);
    rect(600, h/2, 10, 600);
    rect(50, h/2, 10, 600);
   
  }
}