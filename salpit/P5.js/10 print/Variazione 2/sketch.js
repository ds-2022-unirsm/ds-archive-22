

var x = 100; // store current x position on the grid
var y = 20; // store current y position on the grid



function setup() {
  //pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  //
  background(200);
  //
  //url = getURL();
  strokeJoin(ROUND);
}

function draw() {
  
  // controllo colore (random (red), random (green), random (blue), random (opacità interna figura))
  fill(random(231), random(35), random(133), random(120)); 
  
  if (random(1) > 0.4) {
    triangle(x + 30, y + 10, x += 20, y += 100, 10, 10);
    rotate(PI/15);
  }

  
  // passo alla casella a lato
  x += 100;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x > width) {
    x = 10;
    y += 20 + random(height);

  }
  // se sono in fondo alla pagina ricomincio con colore e griglia differente
  if (y > height) {
    y = 10;
    x = 5 + random(width);
  }
}
