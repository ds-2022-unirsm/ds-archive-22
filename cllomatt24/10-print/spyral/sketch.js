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
//
// Help:
//
//
// —

//rotazione sull'asse y
var ry;

var w, h;
var x = 0;
var y = 0;
var z = 0;
var size = 90;

var rot;
var t = 0;


function setup() {
  createCanvas(w = windowWidth, h = windowHeight, WEBGL);
  background(0);
}

function draw() {
  lights();

  ry = -PI / 2;

  //rotazione di ogni singola linea
  rotateX(-PI / 2);
  rotateY(map(frameCount, 0, 60, 0, ry));

  noStroke();
  translate(0, -h / 3, -h / 3);
  
  //rotazione di ogni singolo modulo
  rotateY(2 * PI);
    push();
    fill(222, 222, 230);
    translate(x, h++);
    box(20, 20, 20);
    pop();

  x += size;

  //quando la linea raggiunge una lunghezza pari alla metà della schermata
  //viene creata una nuova linea
  if (x > w / 2) {
    x = 100;
    y = 20;
  }
}
