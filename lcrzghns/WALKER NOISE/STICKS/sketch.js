// © @fupete MIT license 2021

// random walker OOP
var w, h;
var d = 300;
var quanti = 5;
var c = [];
var speedMax = 3;

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  //textSize(18);
  strokeWeight(5);
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
    c[i].mostra();
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
  this.move = function() {
    if (random(1) >= .5) this.dirX *= -1;
    if (random(1) >= .5) this.dirY *= -1;
    this.x += this.speed * this.dirX;
    this.y += this.speed * this.dirY;
  }

  // metodo display
    this.mostra = function() {
    //this.x = noise(this.t) * w;
    //this.y = noise(this.t) * h;
    let shade = map(this.speed, 1, speedMax, 0, 255);
    stroke(shade);
    if (this.id == quanti - 1) this.qualeAltro = 0;
    else this.qualeAltro = this.id+1;
    line(this.x, this.y, c[this.qualeAltro].x, c[this.qualeAltro].y);
    noStroke();
    fill(shade);
    ellipse(this.x, this.y, 20)
    //text(this.speed, this.x-10, this.y-30)
}
}