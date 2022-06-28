// -
// WALKER & PERLIN NOISE by Alessia Fallarino
// 2022 © AlessiaFallarino @alessiafll Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —


//         _                  _        
//   __ _ | |  ___  ___  ___ (_)  __ _ 
//  / _` || | / _ \/ __|/ __|| | / _` |
// | (_| || ||  __/\__ \\__ \| || (_| |
//  \__,_||_| \___||___/|___/|_| \__,_|


var x;
var y;
var t = 0;
var T = 1000;
var r;
var g;
var b;


function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0);
} 

function draw() { 
  background(0, 20);
  
  fill(r, g, b, 20);
  noStroke();
  ellipse(x,y,50,50);
 
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  //x = noise(t);
  x = map(noise(t),0,1,0,width);
  //y = noise(T);
  y = map(noise(T),0,1,0,height);
  t =t+0.005;
  T =T+0.005;
}
