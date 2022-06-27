var w, h;
var quanti = 20;
var c = [];
var speedMax = 0.5;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  background(230);
  noFill();
  rectMode(CENTER);

  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
 // il primo valore del background cambia lo sfondo e il secondo il "ritardo delle forme"
  background(255, 10);
  // chiamata dei metodi per ogni camminatore
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

// la classe del camminatore inizia qui
function Camminatore(_id) {

  // qui c'è il costruttore
  this.id = _id;
  this.x = random(w);
  this.y = random(h);
  //regolo velocità random
  this.speed = random(3, speedMax);
  
  //cambio area di lavoro
  this.randomX = random(130);
  this.randomY = random(10);
  //cambio larghezza
  this.randomZ = random(140);
  //cambio altezza
  this.randomW = random(130);

  // il metodo move
  this.move = function() {
    this.x = map(noise(this.randomX), 0, 1, 0, width);
    this.y = map(noise(this.randomY), 0, 1, 0, height);

    this.randomX += 0.01 * this.speed;
    this.randomY += 0.015 * this.speed;
  }

  // il metodo display
  this.display = function() {
    stroke(50);
    strokeWeight(2);

    if (this.x > w / 5 && this.x < (w - w / 5)) {
      triangle(this.x, this.y, this.randomZ, this.randomW);
    } else {
      point(this.x, this.y, this.randomZ, this.randomW);
    }
  }
}