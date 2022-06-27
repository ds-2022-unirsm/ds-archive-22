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
// [mouse.Pressed] aumenta spessore linee e aumenta spaziatura
//
// —

let x = 0;
let y = 0;
// grandezza griglia (spaziatura)
let spacing = 50;
let value_stroke = 0.5;

let sfondo = 250;
var r,g,b;

function setup() {
  // creazione finestra visualizzazione
  createCanvas(windowWidth, windowHeight);
  background(sfondo);
}

function draw() {
  // caratteristiche linee
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  stroke(r, g, b);
  strokeWeight (value_stroke);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  
  // se si raggiunge l'altezza max pulire lo sfondo e riniziare da capo
  if (y >= height) {
    background(sfondo);
    y = 0;
    x = 0;
  }
  
  // disegna le linee in una direzione o nell'altra / o \ 
  if (random(1) < 0.5) {
    line (x, y, x + spacing, y + spacing);
  } else {
    line (x, y + spacing, x + spacing, y)
  }
  // separa line l'una dall'altra
  x = x + spacing;
  // aumenta lo spessore delle linee
  //value_stroke = value_stroke + 0.05;
  
  // se si raggiunge la larghezza max pulire lo sfondo e riniziare da capo
  if (x > windowWidth) {
    x = 0;
    y = y + spacing;
  }
}

// se viene premuto il mouse
function mousePressed() {
  // aumenta la spaziatura tra una linea e l'altra (grandezza griglia)
  spacing = spacing + 1;
  // aumenta lo spessore delle linee
  value_stroke = value_stroke + 1;
  // cambia lo sfondo al ricaricamento della pagina da 
  //bianco a nero o viceversa
  if (sfondo === 250) {
    sfondo = 0;
  } else {
    sfondo = 250;
  }
}
