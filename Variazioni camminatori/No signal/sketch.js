var w, h;
var quanti = 700;
var d = 60;
var c = [];
var speedMax = 0.4;

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
fill('white');   
rect(0, this.x, w, 1);








  }
}