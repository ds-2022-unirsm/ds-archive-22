var w, h;
var quanti = 250;
var c = [];
var speedMax = 0.2;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  background(255);
  noFill(255);
  rectMode(CENTER);

  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
 // il primo valore del background cambia lo sfondo e il secondo il "ritardo delle forme"
  background(52, 65, 63);
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
  this.speed = random(0.5, speedMax);
  
  //cambio area di lavoro
  this.randomX = random(100);
  this.randomY = random(100);
  //cambio larghezza
  this.randomZ = random(60, speedMax+1);
  //cambio altezza
  this.randomW = random(60, speedMax+1);

  // il metodo move
  this.move = function() {
    this.x = map(noise(this.randomX), 0, 1, 10, width);
    this.y = map(noise(this.randomY), 0, 1, 10, height);

    this.randomX += 0.1 * this.speed;
    this.randomY += 0.1 * this.speed;
  }

  // il metodo display
  this.display = function() {
    stroke(255, 0, 100);
    strokeWeight(7);
    fill(155 * noise(this.noiseX), 155 * noise(this.noiseX + 30), 155 * noise(this.noiseX + 30));
    

    if (this.x > w / 100 && this.x < (w - w / 100)) {
      circle(this.x, this.y, this.randomZ, this.randomW);
   
    } else {
      circle(this.x, this.y, this.randomZ, this.randomW);
     
    }
  }
}