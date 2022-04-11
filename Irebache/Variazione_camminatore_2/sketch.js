
var w, h;
var quanti = 100;
var d = 60;
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
  background(0, 0, 0);
 
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
  this.x = 80;
  this.y = 80;
  this.speedX = random(3, speedMax);
  this.speedY = random(1, 50);
  this.noiseX = random(0.002);
  this.noiseY = random(0.007);

  // metodo move
  this.move = function() {
    // if (random(1) >= 0.5) this.dirX *= -1;
    // if (random(1) >= 0.5) this.dirY *= -1;
    this.x = noise(this.noiseX) * w
    this.y = noise(this.noiseY) * h
    this.noiseX += 0.1 * this.speedX;
    this.noiseY += 5 * this.speedY;
  }
  
  // metodo display
  this.display = function() {
    fill(200 * noise(this.noiseX), 10 * noise(this.noiseX + 10), 10 * noise(this.noiseX + 30));
    noStroke();
   

arc(200, this.x, 100, 20, 100, d);

arc(400, this.x, 100, 20, 100, d);

arc(600, this.x, 100, 20, 100, d);
arc(800, this.x, 100, 20, 100, d);









  }
}