let x = 0;
let y = 0;
let spacing = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  
  r = random(0,255);
  g = random(0,255); 
  b = random(0,255); 
  
  stroke(255);
  if (random(1) < 0.2) {
    noStroke();
    circle(x, y, 25);
    //line (x,y, x+spacing, y+ spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  //quando termina la riga, passo alla riga successiva
  if (x >= width) {
    x = 0;
    y = y + spacing;
  }

  //quando la tavola è completa, ripulisco e ricomincio
  if (y >= height) {
    background(0);
    x = 0;
    y = 0;
  }
}

//il click del mouse cambia il colore di tutte le palline
function mousePressed() {
   fill (r,g,b);
    
}
