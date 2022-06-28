var t = 0;

function setup() { 
  createCanvas(400, 400);
  background(50);
  stroke(0, 18);
  noFill();
} 

function draw() {
  
  var x1 = width * noise(t+25);
  var x2 = width * noise(t+35);
  var x3 = width * noise(t+45);
  var x4 = width * noise(t+55);
  
  var y1 = height * noise(t+65);
  var y2 = height * noise(t+75);
  var y3 = height * noise(t+85);
  var y4 = height * noise(t+95);
  
  /*var z1 = height * noise(t+105);
  var z2 = height * noise(t+115);
  var z3 = height * noise(t+125);
  var z4 = height * noise(t+135);*/
  
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  fill(noise(t+10)*255,noise(t+15)*255,noise(t+20)*255);
  
  t += 0.005;
  
  // clear the background every 2000 frames using mod (%) operator
  if (frameCount % 2000 == 0) {
  background(50);
  }

}