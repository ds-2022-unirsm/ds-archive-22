//2022 © alericciardo, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
//github.com/ds-2022-unirsm — github.com/fupete
//Educational purposes, MIT License, 2022, San Marino
//alericciardo

//rotazione sull'asse y
var ry;
var x = 0;
var y = 0;
var z = 0;
var size = 30;


function setup() {
  createCanvas(w = windowWidth, h = windowHeight, WEBGL);
  background(0);
}

function draw() {

  ry = -PI / 2;

  //rotazione di ogni singola linea
  rotateX(-PI / 2);
  rotateY(map(frameCount, 0, 30, 0, ry));
  noStroke();
  translate(0, -h / 2, -h / 2);
  
  //rotazione di ogni singolo modulo
  rotateY(-PI / 2);
    push();
    lights();
    stroke(255);
    noFill();
    strokeWeight(1);
    translate(x, h++);
    box(15, 15, 15);
    pop();

  x += size;

  //quando la linea raggiunge una lunghezza pari alla metà della schermata
  //viene creata una nuova linea
  if (x > w / 2) {
    x = 30;
    y = 30;
  }
}
