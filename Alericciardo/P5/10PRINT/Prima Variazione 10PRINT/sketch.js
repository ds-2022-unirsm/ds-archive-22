// alericciardo
// 10 Print

var x = 0;
var y = 0;
var g = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  
  noStroke();
  
  // lancio la monetina e disegno la riga corrispondente
  if (testa()) {
  fill (255, 39, 17)
  rect (x + g/3, y + g/3, g)

  }
  else{
  rect (x + g/3, y + g/3, g)  
    fill (0, 126, 193)
  } 
    //passo alla casella accanto
   x = x + g;

  //quando termina la riga, passo alla riga successiva
  if ( x >= width) {
    x = 0;
    y = y + g;
  }
  
  //quando la tavola è completa, ripulisco e ricomincio, dimezzando la dimensione della griglia cambiando il colore di sfondo
  if (y >= height) {
    background(14, 181, 255);
    x = 0;
    y = 0;
    g = g/2;
  }
}

//il click del mouse cambia colore di sfondo cambia la forma da cerchio a quadrato e raddoppia la dimensione della griglia
function mousePressed() {
  // aumenta la spaziatura tra una linea e l'altra (grandezza griglia)
  g = g + 100;
  if (rect === rect) {
    rect = circle;
  } else {
  background === (14, 181, 255)
  }
  background (255, 73, 53);
}


//funzione che "lancia moneta"
function testa() {
  if (random(2) <= 1) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}