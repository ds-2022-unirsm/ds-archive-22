let x = 0;
let y = 0;
let spacingX = 100;
let spacingY = 15;

function setup() {
createCanvas(displayWidth, displayHeight)
frameRate(80);
}

function draw() {
  
 // fill(random(255), random(165), random(233), random(200));

  for (x = 0; x <= width; x += spacingX) {
    for (y = 0; y <= height; y += spacingY) {
     // noFill();
     // noStroke();
    // stroke(random(255,0));
   //  strokeWeight(100);
    // rect(x, y, 200, 200);
     // fill(random(255,0),);
      //rect(x + 25, y + 25, 25, 25);
    //  rect(x * 10, y *10, 400, 0);
      fill(random(255), random(165), random(255), random(1));
rect(x, y, width/40,random(height));
 // line (y,x * 100, random(y*200),random(x*100));
//rect((y/1), (x/1), random(height/100),random(width/100));
    }
}
}
//function mousePressed() {
//spacingX = spacingX*5;
//frameRate(50)
//}

