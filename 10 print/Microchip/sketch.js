var x = 0;
var y = 0;
var c = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(143, 0, 255);
  strokeJoin(ROUND);
}

function draw() {
  strokeWeight(c / 50);
  if (testa()) {
    strokeWeight(5);
    stroke(65, 105, 225);
    fill(65, 105, 225);
    circle(x * c, height - c * y, 20);

    stroke(240, 230, 140);
    fill(240, 100, 14);
    circle(x * c, height - c * y, 10);

    stroke(244, 100, 15);
    line(x * c, height - c * y - c, x * c + c, height - c * y);
    
  } else {
    strokeWeight(5);
    stroke(255, 255, 255);
    line(x * c, height - c * y - c, x * c, height - c * y);
 
  }
  // passo alla casella a lato
  x++;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x * c >= width) {
    x = 0;
    y++;
  }
  // se sono in fondo alla pagina ricomincio 
  if (y * c >= height) {
    background(143, 0, 255);
    x = 0;
    y = 0;
  }
}

function mousePressed() {
  background(143, 0, 255);
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
