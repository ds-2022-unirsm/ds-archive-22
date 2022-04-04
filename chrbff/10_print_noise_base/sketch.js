let x = 0;
let y = 0;
let spazio = 30;
let incr=0;

function setup() {
  createCanvas(600, 600);
  background(40);
}

function draw() {

  stroke(map(noise(incr), 0, 1, 0, 255));
  incr+=0.02;

  strokeWeight(4);

  if (random(1) < 0.5) {
    line(x, y, x + spazio, y + spazio);
  } else {
    line(x, y + spazio, x + spazio, y);
  }
  x = x + spazio;
  if (x > width) {
    x = 0;
    y = y + spazio;
  }
  if (y >= height) {
    y = 0;
    background(40);
  }
}
