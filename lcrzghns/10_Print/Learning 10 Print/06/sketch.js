//   _                    _               
//  | | ___ _ __ ______ _| |__  _ __  ___ 
//  | |/ __| '__|_  / _` | '_ \| '_ \/ __|
//  | | (__| |   / / (_| | | | | | | \__ \
//  |_|\___|_|  /___\__, |_| |_|_| |_|___/
//                  |___/                 

// 10 Print_Sleep or work by Lucrezia Ghinassi [sleep, work]
// 2022 © Lucrezia Ghinassi, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —


let x=0;
let y=0;
let w=20;
let h=20;

let img1;
let img2;

function preload() {
  img1 = loadImage('01.png');
  img2 = loadImage('02.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
if (random(1)<0.5){
  image(img1, x, y, 30, 30);
  
}else{
  image(img2, x, y, 30, 30);
}
  
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