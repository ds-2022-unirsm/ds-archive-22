//@ariannater

let x= 0;
let y= 0;
let size=20;
let sfondo=(12, 106, 112);


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(12, 106, 112);
}

function draw() {
 
  r = random(0, 12);
  g = random(0, 166);
  b = random(0, 212);
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
  //dimensioni stroke diverse
   strokeWeight(Math.random() * 3); 
   stroke(5,173,181 * Math.random() + 100);

  if(direzione() < 0.8){
  line(x, y, x + size, y + size);
    } else {
      line(x+ size, y, x, y + size);
    }
x += size;
 
  }

//direzionelinea-testa_o_croce 
function direzione() {
  if (random(18.5) <= 3) {
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
  if (size>80){
    
    size=size/5;
  }
background(r,g,b);
}


