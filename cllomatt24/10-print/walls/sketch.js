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


let w;
let h;

let x = 0;
let y = 0;
let z = 0;

let incr = 50;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight), WEBGL);
  angleMode(DEGREES);
  background(25);
}

function draw() {
  lights();
  //orbitControl();
  
  push();
  rotateX(-50);
  rotateZ(0);
  rotateY(30);

  // COLOR //////////////////////////////////////
  var r = 55;
  var g = 235;
  var b = 255;
  
  translate(w/15.5, y-180, z-100);
  stroke(r, g, b);
  strokeWeight(0.8);
  noFill();

  box(50);

  x = x + incr;

  if (x > 400) {
    x = 0;
    y = y + incr;
  }

  if (y > 400) {
    x = 0;
    y = 0;
    z += 50;  
  }
  pop();
  
   push();
  rotateX(-50);
  rotateZ(0);
  rotateY(-30);

  // COLOR //////////////////////////////////////
  var r = 55;
  var g = 235;
  var b = 255;
  
  translate(-w/15.5, y-180, z-100);
  stroke(r, g, b);
  strokeWeight(0.8);
  noFill();

  box(50);

  x = x + incr;

  if (x > 400) {
    x = 0;
    y = y + incr;
  }

  if (y > 400) {
    x = 0;
    y = 0;
    z += 50;  
  }
  pop();
}

