// Andrea Ingrando

var x = 0; // store current x position on the grid
var y = 0; // store current y position on the grid
var g = 50; // grid size
//var colore = 200; // current grid color

function setup() {
  //pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  //
  background(40,120,150);
  //
  //url = getURL();
  strokeJoin(ROUND);
}

function draw() {
  preparaQuadretto();
  // riga proporzionale alla griglia
  strokeWeight(0);
  // lancio la monetina e disegno la riga corrispondente
  if (testa()) {
    fill(20,50,70)
    circle(x * g, height - g * y, 20);
  } else {
    fill("red")
    //circle(x * g, height - g * y - g, 10);
    rect(x * g, height - g * y,5, 15);
  }
  // passo alla casella a lato
  x++;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x * g >= width) {
    x = 0;
    y++;
    preparaRiga();
  }
  // se sono in fondo alla pagina ricomincio con colore e griglia differente
  if (y * g >= height) {
    y = 0;
    colore = random(255);
    //g = 5 + random(width);
    preparaRiga();
  }
}


// lancio della monetina
function testa() {
  if (random(2) <= 1) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}

// cancella una riga prima di disegnarci
function preparaRiga() {
 fill(20,50,70);
}

// cancella un quadretto prima di disegnarci
function preparaQuadretto() {
  fill(20,50,70);
  //stroke(0);
  //rect(x * g, height - g * (y + 1), g - 1, g - 1);
  //rect(x*g,height-g*(y+1),g-(g/20),g-(g/20));
  //stroke(255 - colore);
}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}