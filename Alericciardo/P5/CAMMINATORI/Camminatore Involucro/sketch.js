// involucro
// Alericciardo

let x, y;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  
  //ellipseMode(CENTER);
  noFill();
  t=0;
}

function draw() {
  background(255);
  orbitControl()
  
  x = 100 * noise(t);
  y = 100 * noise(t+10);

  //translate(windowWidth / 2, windowHeight / 2);
  

  
  for (var j = 0; j < 4; j++) {
    rotate(HALF_PI/2 * j);
    stroke(0);
    strokeWeight(0.5);
    //box(x*2, y*2,);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(200, 200, 200);
    
    t+=0.0002;
  }
  
   for (var j = 0; j < 2; j++) {
    rotate(HALF_PI/2 * j);
    stroke(0);
    strokeWeight(0.1);
    sphere(40);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    t+=0.0002;
  }
  
  
  
}