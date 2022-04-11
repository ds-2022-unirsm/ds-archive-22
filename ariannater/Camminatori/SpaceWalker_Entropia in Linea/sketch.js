//ariannater
//variazione SpaceWalker
var w, h;
var quanti = 20;
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
  this.speed = noise(50, strokeDim);
  this.altro;
  this.randomX = random(250); // valore X per noise();
  this.randomY = random(100); // valore Y per noise();
  this.randomZ = random(50); // valore per "b" dell'rgb

  // METODO MOVE
  this.move = function() {
    this.x = map(noise(this.randomX), 0, 1, 0, width);
    this.y = map(noise(this.randomY), 0, 1, 0, height);

    this.randomX += 0.01 * this.speed;
    this.randomY += 0.01 * this.speed;
  }

  // METODO DISPLAY
  this.display = function() {
    stroke(map(this.randomX, 108, 25, 200, 155), 
    map(this.randomY, 180, 200, 160, 255), 
    map(this.randomZ, 0,80, 0, 205), 100);
    strokeWeight(map(strokeDim,80, 130)); 


  if (this.id == quanti - 1) this.altro = 1;
    else this.altro = this.id + 1;
    line(this.x, this.y, c[this.altro].x, c[this.id].y);
  }
}

