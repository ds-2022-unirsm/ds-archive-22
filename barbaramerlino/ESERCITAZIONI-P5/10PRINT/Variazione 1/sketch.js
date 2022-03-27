// Barbara Merlino

var x = 0;
var y = 0;
var g = 50;
var colore_sfondo = 255;
var palla1 = "blue";
var palla2 = "orange";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colore_sfondo);
  strokeJoin(ROUND);
  strokeWeight(1.5);
}

function draw() {
  if (testa()) {
    noStroke();
    fill(palla2);
    circle(x + g - 21, y + g - 20, 12);

    stroke(0);
    noFill();
    circle(x + g / 2, y + g / 2, 25);
  } else {
    noStroke();
    fill(palla1);
    circle(x + g - 29, y + g - 30, 12);

    stroke(0);
    noFill();
    circle(x + g / 2, y + g / 2, 25);
  }
  //passo alla casella accanto
  x = x + g;
  //quando termina la riga, passo alla riga successiva
  if (x >= width) {
    x = 0;
    y = y + g;
  }

  //quando la tavola è completa, ripulisco e ricomincio cambiando i colori
  if (y >= height) {
    if (palla1 == "blue" || palla2 == "orange") {
      palla1 = "red";
      palla2 = "green";
    } else {
      palla1 = "blue";
      palla2 = "orange";
    }

    background(colore_sfondo);
    x = 0;
    y = 0;
  }
}

function mousePressed() {
  //x = 0;
  // y = 0;
  if (palla1 == "blue" || palla2 == "orange") {
    palla1 = "red";
    palla2 = "green";
  } else {
    palla1 = "blue";
    palla2 = "orange";
  }
}

function testa() {
  if (random(3) <= 1) {
    return true;
  } else {
    return false;
  }
}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
