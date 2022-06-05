// alericciardo
// waves cube 10 print

let x = 0;
let y = 0;
let spacing = 20;
let modulo;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight), WEBGL);
  background(0);
  modulo = w/h
  // x = modulo;
  //y = modulo;
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  
}

function draw() {
  //orbitControl()
  translate(-w / 2, -h / 2);
  noStroke();
  //strokeWeight(0.5);
  //stroke(0);
  //ambientLight(50);
  lights();
  push();
  //rectMode(CENTER);
  translate(x - modulo/2, y - modulo / 2, 0);
  translate(p5.Vector.fromAngle(millis() / 100,30, ));
  box(30,15);
  pop();
  
  

  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
  else if (y > height) {
    color (255)
    background(255);
    x = 0;
    y = 0;
  }
}