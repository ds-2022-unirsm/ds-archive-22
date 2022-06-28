// black flowers

let x, y;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight, );
  background(255);
  ellipseMode(CENTER);
  noFill();
  t=0;
}

function draw() {
  //background(60, 10);
  
  x = 100 * noise(t);
  y = 200 * noise(t+5);

  translate(windowWidth / 2, windowHeight / 2);
  
  for (var i = 0; i < 8; i++) {
    rotate(HALF_PI/2 * i);
    stroke(0);
    strokeWeight(0.1);
    ellipse(x, y, 200);
    t+=0.0002;
  } 
}