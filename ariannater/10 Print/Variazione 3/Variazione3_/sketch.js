//@ariannater

let x= 0;
let y= 0;
let size=20;
let sfondo=(255, 140,37);


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(255, 140,37);
}

function draw() {
    strokeWeight(Math.random() * 3); 
   stroke(5,173,181 * Math.random() + 100);

  r = random(0, 255);
  g = random(0, 140);
  b = random(0, 250);
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
  if (random(1) < 0.5) {
    circle(x, y,5,5, x + size, y * size);
    noFill();
    x += size*2;
  } else {
 circle(x*2, y*2 ,8,8, x + size, y + size);
    fill(250,0,237,50);
    x >= size;
   arc(x, y,40, 40,60, size);;
  
  }
}

//direzionelinea-testa_o_croce 
function direzione() {
  if (random(10) <= 2*x) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}


//premendo il mouse cambia colore di sfondo e riparte a disegnare
//superato un determinato valore torna indietro
function mousePressed() {
  x = 0;
  y = y+50;  
  size=size+5;
  if (size>60){
    
    size=size/5;
  }
background(r,g,b);
}


