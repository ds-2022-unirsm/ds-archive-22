// -
// 10PRINT_porting 0.1 by @alessiaciccone [10print, porting]
// 2022 © Alessia M.T. Ciccone @alessiaciccone, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete — github.com/alessiaciccone
// Educational purposes, MIT License, 2022, San Marino
// —
// @fupete (github.com/fupete) for https://editor.p5js.org/fupete/sketches/Hy0yeapg7
// original license:


//coordinate iniziali e grandezza quadrato della griglia
let x = 0;
let y = 0;
let g = 40; 

let colore_sfondo = 200;

function setup() {
  //prepariamo la finestra
  createCanvas(700, 700);
  background(colore_sfondo);
  strokeJoin(BEVEL);
}

function draw() {
  disegnaQuadrato();
  
  //proprietà delle linee
  strokeWeight(g / 20);
  strokeCap(PROJECT);
  stroke(0);

  //se il risultato della funzione che lancia la monetina è vero 
  // la linea andrà da sinistra a destra
  // se è falso andrà da destra a sinistra
  if (testaCroce()) {
    line(x * g, y * g, x * g + g, y * g + g);
  } else {
    line(x * g + g, y * g, x * g, y * g + g);
  }

  // x progredisce di 1 per far disegnare quadrati e linee in sequenza
  x++;

  //quando la x raggiunge la larghezza della finestra si ricomincia
  // una riga più giù
  if (x * g >= width) {
    x = 0;
    y++;
  }

  // quando la y raggiunge la lunghezza della finestra si ricomincia da capo
  // e cancella le linee disegnate finora
  if (y * g >= height) {
    background(colore_sfondo);
    y = 0;
  }
}

//funzione che disegna un quadrato
function disegnaQuadrato() {
  fill(colore_sfondo);
  noStroke();
  rect(x * g, y * g, g, g);
}

//funzione che "lancia una monetina"
// estrae un numero random tra 2 e ne fa corrispondere vero o falso
function testaCroce() {
  if (random(2) <= 1) {
    return true; // testa
  } else {
    return false; // croce
  }
}
