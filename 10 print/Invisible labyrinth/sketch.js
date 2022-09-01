//coordinate iniziali e grandezza quadrato della griglia
var x = 0;
var y = 0;
var g = 20; 
var coloresfondo = 0;
var spessorelinee = g /50;
var colore = (0, 30, 255);




function setup() {
  //prepariamo la finestra
  createCanvas(windowHeight,windowWidth);
  background(coloresfondo);
  strokeJoin(ROUND);
}

function draw() {
  disegnaQuadrato();
   strokeWeight(spessorelinee);
  strokeCap(ROUND);


  
  stroke(0, 0, 0);


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
    background(coloresfondo);
    y = 0;
  }
}

//funzione che disegna un quadrato
function disegnaQuadrato() {
  fill(coloresfondo);
  noStroke();
  rect(x * g, y * g, g, g);
}

//funzione che "lancia una monetina"
// estrae un numero random tra 2 e ne fa corrispondere vero o falso
function testaCroce() {
  if (random(9) <= 2) {
    return true; // testa
  } else {
    return false; // croce
  }
}

function mousePressed() {

  //spessore linea aumenta di 1
  spessorelinee++;
  
//cambiare colore dello sfondo del quadratino
 
  if (coloresfondo == 0)  {
    coloresfondo = 255;
    

  }
  else{
    coloresfondo = 0;
    
  }
  


  
}
