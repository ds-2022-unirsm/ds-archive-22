// Modifiche codice di Sofia Montanari, @Sof02
//esercizio dato da Daniele Tabellini
// 10 print porting to P5js | Firenze, IT | 4.2016
// Educational purpose, made for DSII2016 lab @UniRSM

var x = 20; // store current x position on the grid
var y = 20; // store current y position on the grid
var g = 170; // grid size
var colore = 555; // current grid color

function setup() {
  pixelDensity(displayDensity(ROUND));
  createCanvas(windowWidth, windowHeight);
  //
  background(110);
  //
  //url = getURL();
  strokeJoin(ROUND);
}

function draw() {
  preparaQuadretto();
  // riga proporzionale alla griglia
  strokeWeight(g / 100);
  // lancio la monetina e disegno la riga corrispondente
  if (testa()) {
    line(x * g, height - g * y, x * g + g, height - g * y - g);
  } else {
    line(x * g, height - g * y - g, x * g + g, height - g * y);
  }
  // passo alla casella a lato
  x++;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x * g >= width) {
    x = 0;
    y++;
    preparaRiga(ROUND);
  }
  // se sono in fondo alla pagina ricomincio con colore e griglia differente
  if (y * g >= height) {
    y = 0;
    colore = random(355);
    g = 5 + random(width);
    preparaRiga(ROUND);
  }
}

// riparti se premi il mouse
function mousePressed() {
  x = 50;
  y = 50;
  colore = random(0);
  g = 5 + random(width);
  preparaRiga(ROUND);
}

// lancio della monetina
function testa() {
  if (random(25) <= 1) {
    return true; // testa
  } else {
    return false; // croce
  }
}

// cancella una riga prima di disegnarci
function preparaRiga() {
 fill(colore);
  noStroke();
  rect(0,height-g*y-g-1,width,g+1);
  stroke(0-colore);
}

// cancella un quadretto prima di disegnarci
function preparaQuadretto() {
  fill(0);
  noStroke();
 rect(x * g, height - g * (y + 1), g - 1, g - 1);
  rect(x*g,height-g*(y+1),g-(g/40),g-(g/40));
  stroke(355 - colore);
}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
