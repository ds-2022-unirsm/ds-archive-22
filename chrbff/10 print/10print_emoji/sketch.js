let x = 0;
let y = 0; 
let spazio = 30;
let spessore = 0.5;
let img0;
let img1;
let arancione;

function preload () {
  img0 = loadImage('0.png');
  img1 = loadImage('1.png');
  arancione = color(251, 177, 23);
}

function setup() {
  createCanvas(600, 600);
 background(arancione);
}

function draw() {
  
  if (random(1) < 0.5) {
//    line (x, y, x + spazio, y + spazio);
//    strokeWeight(spessore);
    image(img0, x, y, 25, 22);
  } else {
  // line (x, y + spazio, x + spazio, y);
   // strokeWeight(spessore);
    image(img1, x, y, 25, 25);
  }

 x = x + spazio; 
  spessore = spessore + 0.1;
  
  if (x > width) {
    x = 0;
    y = y + spazio;
  }
  if (y >= height) {
 background(arancione);
    y = 0;
  }
}