//──────────────╔╗╔╗
//╔═╦╗╔╗╔═╦══╦═╗║╚╣╚╗
//║═╣╚╣╚╣╬║║║║╬╚╣╔╣╔╣
//╚═╩═╩═╩═╩╩╩╩══╩═╩═╝
// cllomatt24 (Matteo Cirillo)
// —
// shining-path 0.1 by Matteo Cirillo [linee, colori, p5speech]
// 2022 © Matteo Cirillo @cllomatt24, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @Fupete (https://twitter.com/fupete) for the course DS-2022 at DESIGN.unirsm 
// original license: Educational purpose
// —

var w, h;
var quanti = 25; // vertici
var c = []; // array vuoto che contiene gli elementi (camminatori)
var speedMax = 0.05; // velocità movimento

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  strokeWeight(2.5); // spessore linea
  strokeCap(SQUARE); // estremità tonde

  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(0, 10); // trasparenza 10 per fare fade

  // per tutti i camminatori chiama i diversi metodi (metodo = funzione)
  for (var i = 0; i < quanti; i++) {
    c[i].move(); // esegue .move per gli elementi "i" dell'array "c"
    c[i].display(); // esegue .display per gli eleenti "i" dell'array "c"
  }
}

// classe
function Camminatore(_id) {
  background(0); // background qui altrimenti si passa da bianco a nero
  // costruttore
  this.id = _id; // con this mi riferisco solo a quell'elemento lì

  this.x = random(w); // x iniziale
  this.y = random(h); // y iniziale

  this.speed = random(0, speedMax); // prende un numero tra 0 e speedMax
  this.tx = random(100); // valore random che rappresenta delta/incremento
  this.ty = random(100); // valore random che rappresenta delta/incremento

  // metodo move
  this.move = function () {
    this.x = w * noise(this.tx); // si moltiplica w sennò troppo piccolo
    this.y = h * noise(this.ty); // si moltiplica h sennò troppo piccolo

    this.tx += 0.01;
    // this.tx sarà uguale a se stesso più this.speed
    // valore cambia ad ogni frame
    // si moltiplica 0.01 per rallentare/accelerare movimento
    this.ty += 0.01;
    // this.ty sarà uguale a se stesso più this.speed
    // valore cambia ad ogni frame
    // si moltiplica 0.01 per rallentare/accelerare movimento
  };

  // metodo display
  this.display = function () {
    this.r = map(noise(this.tx), 0, 1, 0, 175);
    this.g = map(noise(this.ty), 0, 1, 0, 100);
    this.b = map(noise(this.speed), 0, 1, 0, 255);

    stroke(this.r, this.g, this.b, 20);
    noFill();
    var x1 = width * noise(this.tx + 85);
    var x2 = width * noise(this.tx + 75);
    var x3 = width * noise(this.tx + 65);
    var x4 = width * noise(this.tx + 55);
    var y1 = height * noise(this.ty + 55);
    var y2 = height * noise(this.ty + 65);
    var y3 = height * noise(this.ty + 75);
    var y4 = height * noise(this.ty + 85);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, 2, 2);
  };
}
