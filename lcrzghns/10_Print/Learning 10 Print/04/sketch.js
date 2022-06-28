//   _                    _               
//  | | ___ _ __ ______ _| |__  _ __  ___ 
//  | |/ __| '__|_  / _` | '_ \| '_ \/ __|
//  | | (__| |   / / (_| | | | | | | \__ \
//  |_|\___|_|  /___\__, |_| |_|_| |_|___/
//                  |___/    
//
// 10 Print_QRCode by Lucrezia Ghinassi [black, white, qrcode]
// 2022 © Lucrezia Ghinassi, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @fupete (https://twitter.com/fupete) for https://github.com/Fupete
// original license: MIT LICENSE
//

let x=0;
let y=0;
let w=20;
let h=20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  
if (random()<0.5){
  noStroke();
  line(x,y,x,y+h);
  fill(255);
  
}else{
  fill(0);
  //line(x,y+h,x+w,y+h);
}
  rect(x,y,20,20);
  
  x=x+w;
  if(x>width){
    x=0;
    y=y+h;
  }
  if(y>height){
    x=0;
    y=0;
    background(220);
  }
}