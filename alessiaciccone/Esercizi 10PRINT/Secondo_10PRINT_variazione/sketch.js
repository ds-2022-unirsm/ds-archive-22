// @alessiaciccone

//coordinate iniziali e grandezza quadrato della griglia
let x = 0;
let y = 0;
let grid = 20;

// variabili dei colori
let r = 0;
let g = 0;
let b = 0;

//incrementi per variare i colori
let rIncremento = 0;
let gIncremento = 0;
let bIncremento = 0;

let spessore_linea = grid / 10;

function setup() {
  //prepariamo la finestra
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //uso il Perlin Noise per far variare i colori di linee e quadrati
  r = map(noise(rIncremento), 0, 1, 0, 255);
  g = map(noise(gIncremento), 0, 1, 0, 255);
  b = map(noise(bIncremento), 0, 1, 0, 255);

  rIncremento += 0.01;
  gIncremento += 0.05;
  bIncremento += 0.09;

  fill(r, g, b);
  stroke(r, g, b);
  strokeWeight(spessore_linea);

  //se il risultato della funzione che lancia la monetina è vero
  // verrà disegnato un quadrato
  // se è falso verrà disegnata una linea
  if (testaCroce()) {
    push();

    noStroke();
    rect(x * grid, y * grid, grid, grid);

    pop();
  } else {
    line(x * grid + grid, y * grid, x * grid, y * grid + grid);
  }

  // x progredisce di 1 per far disegnare quadrati e linee in sequenza
  x++;

  //quando la x raggiunge la larghezza della finestra si ricomincia
  // una riga più giù
  if (x * grid >= width) {
    x = 0;
    y++;
  }

  // quando la y raggiunge la lunghezza della finestra si ricomincia da capo
  // e cancella le linee disegnate finora
  if (y * grid >= height) {
    background(0);
    y = 0;
  }
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

function mousePressed() {
  //grandezza quadrato aumenta di 1
  grid++;
  //spessore linea aumenta di 1
  spessore_linea++;
}
