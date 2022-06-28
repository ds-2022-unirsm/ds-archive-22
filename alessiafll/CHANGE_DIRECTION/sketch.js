// -
// CHANGE DIRECTION by Alessia Fallarino
// 2022 © AlessiaFallarino @alessiafll Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —


//         _                  _        
//   __ _ | |  ___  ___  ___ (_)  __ _ 
//  / _` || | / _ \/ __|/ __|| | / _` |
// | (_| || ||  __/\__ \\__ \| || (_| |
//  \__,_||_| \___||___/|___/|_| \__,_|
                                    



let noiseScale=0.02;
let vx=0;
let vy=0;
let tempo=0;



function setup() {
  createCanvas(w=windowWidth, h=windowHeight);
}

function draw() {
  //const gui = new dat.GUI();
  background(0);
  
  vy=0;
  
 for (let y=0; y < height; y+=10) {
  vx=0;
  for (let x=0; x < width; x+=10) {
     vx=vx+0.2; 
    let noiseVal = noise(vx, vy,tempo);

    if (noiseVal<0.5){
      stroke(255);
      strokeWeight(0.5)
      line(x+10,y,x+10,y+10);

      }else{
      

        stroke(255)
        strokeWeight(0.5)
        line(x,y+10,x+10,y+10);

      }
    }
     vy=vy+0.2;
    }
  tempo+=0.2;
}
