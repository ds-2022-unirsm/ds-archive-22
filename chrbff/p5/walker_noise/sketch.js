// random walker OOP
var w, h;
var d = 300;
var quanti = 3;
var c = [];
var speedMax = 4;
var xoff = 0;
let incr = 0;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  textSize(18);
  strokeWeight(7);
  strokeCap(ROUND);
  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(0);

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
  this.x = random(w);
  this.y = random(h);
  this.dirX = 1;
  this.dirY = 1;
  this.speed = random(1, speedMax);
  this.qualeAltro;

  // metodo move
  this.move = function () {
    if (random(1) >= 0.5) this.dirX *= -1;
    if (random(1) >= 0.5) this.dirY *= -1;

    this.x += random(-1, 1) * map(noise(xoff), 0, 1, 0, 10);
    this.y += random(-1, 1) * map(noise(xoff), 0, 1, 0, 10);
  };

  // metodo display
  this.display = function () {
    let shade = map(this.speed, 1, speedMax, 0, 255);
    stroke(
      map(noise(incr), 0, 1, 0, 255),
      map(noise(incr), 0, 1, 0, 255),
      map(noise(incr), 0, 1, 0, 255)
    );

    incr += 0.01;

    if (this.id == quanti - 1) this.qualeAltro = 0;
    else this.qualeAltro = this.id + 1;
    line(this.x, this.y, c[this.qualeAltro].x, c[this.qualeAltro].y);
    noStroke();

    fill(shade);

    ellipse(this.x, this.y, 20);
  };
}
