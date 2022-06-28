let x = 0;
let y = 0;
let spacingX = 30;
let spacingY = 15;

function setup() {
createCanvas(displayWidth, displayHeight)
frameRate(60);
}

function draw() {
  
  background(0);
  for (x = 0; x <= width; x += spacingX) {
    for (y = 0; y <= height; y += spacingY) {
      noFill();
     // noStroke();
     stroke(random(255,0));
     strokeWeight(10);
      //rect(x, y, 200, 200);
     // fill(random(255,0),);
      //rect(x + 25, y + 25, 25, 25);
      //rect(x, y, 20, 50);
      //fill(255);
//rect(random(x/1), random(y/1), width/100,height/100);
      line (random(x*0),random(y*20), width*10000,height);
//rect((y/1), (x/1), random(height/100),random(width/100));
    }
}
}
function mousePressed() {
spacingX = spacingX*5;
frameRate(50)
}

