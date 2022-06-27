let x = 0;
let y = 0;
let spacingX = 30;
let spacingY = 10;

function setup() {
createCanvas(displayWidth, displayHeight)
frameRate(60);
}

function draw() {
  
  background(0);
  for (x = 0; x <= width; x += spacingX) {
    for (y = 0; y <= height; y += spacingY) {
      noFill();
      noStroke();
      //stroke(random(255,0));
      //strokeWeight(5);
      //rect(x, y, 200, 200);
      fill(random(255,0),);
      //rect(x + 25, y + 25, 25, 25);
      rect(x, y, 20, 50);
    }
}
}
function mousePressed() {
spacingX = spacingX+5;
frameRate(30)
}

