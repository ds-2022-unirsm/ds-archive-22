var xoff;
var yoff;
var roff;
var goff;
var boff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xoff = 0;
  yoff = 0.5;
  roff = 1;
  goff = 2;
  boff = 3;
}

function draw() {
  noStroke();
  blendMode(MULTIPLY);
  
  var noiseyX = noise(xoff);
    var x = map(noiseyX, 0, 1, 0, width);
    var noiseyY = noise(yoff);
    var y = map(noiseyY, 0, 1, 0, height);
    ellipse(x,y,noise(xoff)*200,noise(xoff)*200);
  
  fill(noise(roff)*255,noise(goff)*0,noise(boff)*0, 5)
  
  xoff += 0.005;
  yoff += 0.005;
  roff += 0.01;
  goff += 0.01;
  boff += 0.01;
}