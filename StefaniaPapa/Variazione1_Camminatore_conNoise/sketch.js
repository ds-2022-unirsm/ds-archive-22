//Variazione random walker+noise

// random walker OOP
var w, h;
var d = 20;
var quanti = 50;
var c = [];
var speedMax = 0.2;
var c1, c2;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
   // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
  c1 = color(45, 87, 44);
  c2 = color(255);
  setGradient(c1, c2);

}

function draw() {
 //background(0,143,57);


  // per tutti i camminatori chiama i diversi metodi utili 
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].mostra();
  }
}


// classe
function Camminatore(_id) {

  // costruttore
  this.id = _id;
  this.x = 0;
  this.y = 0;
  //this.dirX = 1;
  //this.dirY = 1;
  this.speedX = random(0, speedMax);
  this.speedY = random(7, speedMax);
  this.noiseX = random(30);
  this.noiseY = random(30);

  // metodo move
  this.move = function() {
    
    this.x = noise(this.noiseX) * w;
    this.y = noise(this.noiseY) * h;
    this.noiseX += 0.003 * this.speedX;
    this.noiseY += 0.002 * this.speedY;
  }

  // metodo display
  this.mostra = function() {
    fill(65 * noise(this.noiseX), 255 * noise(this.noiseX + 10), 105 * noise(this.noiseX+10));
    stroke(220);
    strokeWeight(1);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, d);
    
  }

}

function setGradient(c1, c2) {
  
  noFill();
 for (var y = 0; y < height; y++) {
   var inter = map(y, 0, height, 0, 1);
   var c = lerpColor(c1, c2, inter);
   stroke(c);
   line(0, y, width, y);
  }
}