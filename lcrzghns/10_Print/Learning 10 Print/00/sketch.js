//   _                    _               
//  | | ___ _ __ ______ _| |__  _ __  ___ 
//  | |/ __| '__|_  / _` | '_ \| '_ \/ __|
//  | | (__| |   / / (_| | | | | | | \__ \
//  |_|\___|_|  /___\__, |_| |_|_| |_|___/
//                  |___/    
//
// 10 Print Base by Lucrezia Ghinassi [basic]
// 2022 © Lucrezia Ghinassi, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —

let x=0;
let y=0;
let w=20;
let h=20;

function setup() {
  createCanvas(400, 400);
  background(180);
}

function draw() {
  
if (random()<0.5){
  line(x,y,x+w,y+h);
  
}else{
  line(x+w,y,x,y+h);
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
