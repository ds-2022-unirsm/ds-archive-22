// @alessiafll

// -
// 10PRINT by Alessia Fallarino
// 2022 © AlessiaFallarino @alessiafll Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —


//         _                  _        
//   __ _ | |  ___  ___  ___ (_)  __ _ 
//  / _` || | / _ \/ __|/ __|| | / _` |
// | (_| || ||  __/\__ \\__ \| || (_| |
//  \__,_||_| \___||___/|___/|_| \__,_|

//coordinate iniziali x e y, dimensione della griglia e colori
var x = 0;
var y = 0;
var g = 20;
var colore_sfondo = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colore_sfondo);
  strokeJoin(ROUND);
}

function draw() {
  
  // lancio la monetina e disegno la riga corrispondente
  if (testa()) {
    //disegno un cerchio
    circle (x + g/2, y + g/2, g)
    noStroke();
    fill(random(0, 255));
  }
  else{
    
  } 
  //passo alla casella accanto
   x = x + g;
    
  
  //quando termina la riga, passo alla riga successiva  
  if ( x >= width) {
    x = 0;
    y = y + g;
  }
  
    //quando la tavola è completa, ripulisco e ricomincio invertendo i colori di sfondo e dimezzando la dimensione della griglia
  if (y >= height) {
    if (colore_sfondo == 0) {
    colore_sfondo = 255;
    }
    else {
      colore_sfondo = 0;
    }
    background(colore_sfondo)
    x = 0;
    y = 0;
    g = g/2;
  }
}

//il click del mouse inverte il colore dello sfondo e raddoppia la dimensione della griglia
function mousePressed() {
  x = 0;
  y = 0;
  g = g *2;
     if (colore_sfondo == 0) {
    colore_sfondo = 255;
    }
    else {
      colore_sfondo = 0;
    }
    background(colore_sfondo)
  
}


//funzione che "lancia la monetina"
function testa() {
  if (random(2) <= 1) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}
