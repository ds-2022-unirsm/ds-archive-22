//ariannater
//variazione SpaceWalker
//BoscoVerticale
var w, h;
var quanti = 15;
var c = [];
var strokeDim = 1;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  noFill();
  background(255,0);

  // crea "n" oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(255,10);

  // per tutti i camminatori chiama i diversi metodi utili 
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

// CLASSE CAMMINATORE
function Camminatore(_id) {

  // COSTRUTTORE
  this.id = _id;
  this.x;
  this.y;
  this.speed = noise(10, strokeDim);
  this.altro;
  this.randomX = random(50); // valore X per noise();
  this.randomY = random(200); // valore Y per noise();
  this.randomZ = random(255); // valore per "b" dell'rgb

  // METODO MOVE
  this.move = function() {
    this.x = map(noise(this.randomX), 0, 1, 0, width);
    this.y = map(noise(this.randomY), 0, 1, 0, height);

    this.randomX += 0.00001 * this.speed;
    this.randomY += 0.007 * this.speed;
  }

  // METODO DISPLAY
  this.display = function() {
   
   stroke(map(this.randomX, 0, 255, 10, 185), 
    map(this.randomY, 200, 25, 160, 255), 
    map(this.randomZ, 18, 95, 10, 100), 200);
    strokeWeight(map(strokeDim,1, 100)); 

  if (this.x > w || this.x<(h-10)) {
      circle(this.x, this.y, this.randomX, this.randomX);
    } else {
      circle(this.x, this.x, this.randomZ, this.randomZ);
    }
  }
}

