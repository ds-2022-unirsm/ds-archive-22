

var x = 180; // store current x position on the grid
var y = 2; // store current y position on the grid



function setup() {
  //pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight,  WEBGL);
  detailY = createSlider(300, 160, 3);
  detailY.position(1000, width + 335);
  detailY.style('height', '280px');
  smooth();
  //
  background(255);
  //
  //url = getURL();
 // strokeJoin(ROUND);
}

function draw() {
  
  // controllo colore (random (red), random (green), random (blue), random (opacità interna figura))
  fill(random(255), random(165), random(233), random(200)); 
  
  if (random(10000) > 0.1) {
 //   arc(x + 30, y + 30, x += 10, y += 10, 0, PI + QUARTER_PI);
 //  triangle(x + 30, y + 10, x += 20, y += 100, 10, 10);
   rotate(PI/560);

  rotateY(millis() / 0.1);
  torus( 1 * x,  1 * y, x += 0, y += 0, detailY.value());
  }

  
  // passo alla casella a lato
  //x - 0;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x <= 0) {
    x = 10;
    y += 20 + random(height);

  }
  // se sono in fondo alla pagina ricomincio con colore e griglia differente
  if (y > width) {
    y = 100;
    x = 5000 + random(height);
  }
}
