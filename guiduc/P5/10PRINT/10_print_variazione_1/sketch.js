// -
// 10print_variazione 1 by Chiara Guiducci [background, linee]
// 2022 © Chiara @guiduc, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @shiffman (github.com/shiffman) for http://10print.org/
// original license: Tipo licenza
// —

var x = 0;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(214,214,212);
}

function draw() {
  strokeWeight(2)
  stroke (179,151,170)
  if (random(1) > 0.5) {
    line(x, y, x+20, y+20);
  } 
  else {
    line(x, y+20, x+20, y);
  }

  x += 20;
  if (x > width) {
    x = 0;
    y += 20;
  }

  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
}