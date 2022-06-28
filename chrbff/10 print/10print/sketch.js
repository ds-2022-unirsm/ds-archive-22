let x = 0;
let y = 0; 
let spazio = 30;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  stroke (255);
  if (random(1) < 0.5) {
    line (x, y, x + spazio, y + spazio);
  } else {
    line (x, y + spazio, x + spazio, y);
  }
 x = x + spazio; 
  if (x> width) {
    x = 0;
    y = y + spazio;
  }
  if (y >= height) {
    y = 0;
    background(0);
  }
}