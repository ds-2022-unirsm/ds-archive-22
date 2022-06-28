var x,y;
var t = 0;
var T = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0);
} 

function draw() {
  
  background(0, 5);
  /*fill(150, 188, 240);

  x = noise(t);
  x = map(x,0,1,0,width);
  y = noise(T);
  y = map(y,0,1,0,height);*/
  
  var x = width * noise(t);
  var y = height * noise(t+15);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  //occhio sx
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 50, 50);

  //pupilla sx
  fill(150, 188, 240);
  ellipse(x, y, 15, 15);
  
  //occhio dx
  fill(r, g, b);
  ellipse(x+100, y, 50, 50);

  //pupilla dx
  fill(150, 188, 240);
  ellipse(x+100, y, 15, 15);
  
  //bocca(x, y, w, h, start, stop, [mode], [detail])
  fill(r, g, b);
  arc(x+50, y+80, 100, 50, 0, PI);
   
  //naso
  fill(r, g, b);
  ellipse(x+50, y+50, 15, 15);
  
  t =t+0.01;
  T =T+0.01;
}