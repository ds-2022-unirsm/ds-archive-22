//   _                    _               
//  | | ___ _ __ ______ _| |__  _ __  ___ 
//  | |/ __| '__|_  / _` | '_ \| '_ \/ __|
//  | | (__| |   / / (_| | | | | | | \__ \
//  |_|\___|_|  /___\__, |_| |_|_| |_|___/
//                  |___/                 

// 10 Print_Variazione 01 by Lucrezia Ghinassi [circle, rect, red noise]
// 2022 © Lucrezia Ghinassi, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —


let noiseScale = 0.5;
let vx = 0;
let vy = 0;
let tempo = 0;
let w=20;
let h=20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  vx = 0;
  vy = 0;

  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      
      vx = vx + 0.2;
      
      let noiseVal = noise(vx, vy, tempo);
      fill(noiseVal*250, noiseVal*100, noiseVal*100);
      
      if (noiseVal<0.5){
        ellipse(x,y,w,h);
        
      }else{
        rect(x,y,w,h);
      }
    }
    vy=vy+0.2;
  }
  tempo+=0.005;
  
}