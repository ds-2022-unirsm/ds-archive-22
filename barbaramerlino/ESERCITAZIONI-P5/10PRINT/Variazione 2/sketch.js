//BARBARA MERLINO

var x = 0;
var y = 0;
var g = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 49, 83);
  strokeJoin(ROUND);
}

function draw() {
  strokeWeight(g / 50);
  if (testa()) {
    strokeWeight(2);
    stroke(65, 105, 225);
    fill(65, 105, 225);
    rect(x * g, height - g * y, 15, 15);

    stroke(240, 230, 140);
    fill(240, 230, 140);
    rect(x * g, height - g * y, 10, 10);

    stroke(244, 164, 96);
    line(x * g, height - g * y - g, x * g + g, height - g * y);
    
  } else {
    strokeWeight(2);
    stroke(244, 164, 96);
    line(x * g, height - g * y - g, x * g, height - g * y);
 
  }
  // passo alla casella a lato
  x++;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x * g >= width) {
    x = 0;
    y++;
  }
  // se sono in fondo alla pagina ricomincio 
  if (y * g >= height) {
    background(0, 49, 83);
    x = 0;
    y = 0;
  }
}

function mousePressed() {
  background(0, 49, 83);
  x = 0;
  y = 0;
}

function testa() {
  if (random(6) <= 1) {
    return true; 
  } else {
    return false; 
  }
}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
