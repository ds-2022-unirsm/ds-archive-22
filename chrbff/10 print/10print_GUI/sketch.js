//    ___       ___       ___       ___       ___       ___   
//   /\  \     /\__\     /\  \     /\  \     /\  \     /\  \  
//  /::\  \   /:/__/_   /::\  \   /::\  \   /::\  \   /::\  \ 
// /:/\:\__\ /::\/\__\ /::\:\__\ /::\:\__\ /::\:\__\ /::\:\__\
// \:\ \/__/ \/\::/  / \;:::/  / \:\::/  / \/\:\/__/ \/\:\/__/
//  \:\__\     /:/  /   |:\/__/   \::/  /     \/__/     \/__/ 
//   \/__/     \/__/     \|__|     \/__/                    
//
// 10 print GUI b/n 0.1 by chrbff [keyword1, keyword2]
// 2022 © chrbff, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @shiffman (twitter.com/shiffman) for 
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs
// original license: MIT License, Copyright (c) 2019 Coding Train
// 
// Help:
// use the GUI panel to modify
//________________________________________


//PARAMETRI 
let parametri = {
  spazio: 8,
  sfondo: [255,255,0],
  casualità: 0.5,
  spessore: 2,
  linea: true
}

// FUNZIONE GUI
window.onload = function() {

  var gui = new dat.GUI();
  gui.addColor(parametri, 'sfondo');
  gui.add(parametri, 'spazio', 0, 50);
  gui.add(parametri, 'casualità', 0, 1);
  gui.add(parametri, 'spessore', 0, 10);
}


let x = 0;
let y = 0;
let spazio;
let sfondo;
let casualita;
let spessore;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(parametri.sfondo);
}

function draw() {
  strokeWeight(parametri.spessore);
  stroke(25);
  if (random(1) < parametri.casualità) {
    line(x, y, x + parametri.spazio, y + parametri.spazio);
  } else {
    line(x, y + parametri.spazio, x + parametri.spazio, y);
  }

  x = x + parametri.spazio;
  if (x > windowWidth) {
    x = 0;
    y = y + parametri.spazio;
  }

  if (y > windowHeight) {
    x = 0;
    y = 0;
    background(parametri.sfondo);
  }
}