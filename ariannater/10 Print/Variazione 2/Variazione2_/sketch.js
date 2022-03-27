//@ariannater

let x= 0;
let y= 0;
let size=20;
let sfondo=(250, 140,37);


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(250, 140,37);
}

function draw() {

  r = random(0, 0);
  g = random(0, 138);
  b = random(0, 193);
  stroke(r, g, b);
  if (x >= width) {
    y += size;
    x = 0;
  }
  if (y >= height) {
    background(r,g,b);
    y = 0;
    x = 0;
  }
  if (random(1) < 0.6) {
    line(x, y, x + size, y + size);
    noFill();
    
    line(x,y+ size*(-x),x, y+18 + size);
    noFill();
    x += size;
    x += size;
  } else {
   arc(x, y, size,size, 200, PI + QUARTER_PI, PIE);
    noStroke();
    fill(0,138,173);
  
    x += size*2;
  }
}

//direzionelinea-testa_o_croce 
function direzione() {
  if (random(6) <= 3) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}


//premendo il mouse cambia colore di sfondo e riparte a disegnare
//superato un determinato valore torna indietro
function mousePressed() {
  x = 0;
  y = 0;  
  size=size+10;
  if (size>60){
    
    size=size/5;
  }
background(r,g,b);
}


