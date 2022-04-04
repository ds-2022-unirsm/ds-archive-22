let x = 0;
let y = 0;
let spazio = 30;
let incr1 = 0;
let incr2 = 0;
let incr3 = 0;

function setup() {
  createCanvas(600, 600);
  background(255, 204, 0);
}

function draw() {
  
  stroke(map(noise(incr1), 0, 1, 0, 255), 
         map(noise(incr2), 0, 1, 0, 255),
         map(noise(incr3), 0, 1, 0, 255));
  incr1 += 0.03;
  incr2 += 0.03;
  incr3 += 0.03;
  
  strokeWeight(map(noise(incr1), 0, 1, 0, 10));
  incr1 += 0.01;
  
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
    background(255, 204, 0);
  }
}
