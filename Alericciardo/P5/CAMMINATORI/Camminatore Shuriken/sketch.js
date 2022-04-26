// Shuriken
// Alericciardo


let x, y;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60,20);
  //ellipseMode(CENTER);
  noFill();
  t=0;
}

function draw() {
  background(255, 20);
  
  x = 10 * noise(t);
  y = 5 * noise(t+20);

  translate(windowWidth / 2, windowHeight / 2);

  
  for (var j = 0; j < 8; j++) {
    fill (0)
    rotate(HALF_PI/2 * j);
    stroke(0);
    strokeWeight(0.5);
    rect(x*20, y*20, 600);
    
    t+=0.0001;
  }
  

  
    for (var j = 0; j < 8; j++) {
    rotate(HALF_PI/2 * j);
    stroke(0);
    strokeWeight(0.5);
    rect(x*20, y*20, 600);
    t+=0.0010;
  }
  
    for (var j = 0; j < 8; j++) {
    rotate(HALF_PI/2 * j);
    stroke(0);
    strokeWeight(0,5);
    rect(x*100, y*100, 700);

    t+=0.005;
  }
  
    for (var j = 0; j < 8; j++) {
    rotate(HALF_PI/2 * j);
    stroke(0);
    strokeWeight(5);
    ellipse(x, y, 30);

    t+=0.002;
  }
    
}