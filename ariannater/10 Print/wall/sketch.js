                                   
 //                                   
 //  ,---,.                            
 // '  .'  \                   ,--,    
 // /  ;    '.       __  ,-. ,--.'|    
 //:  :       \    ,' ,'/ /| |  |,     
 //:  |   /\   \   '  | |' | `--'_     
 //|  :  ' ;.   :  |  |   ,' ,' ,'|    
 //|  |  ;/  \   \ '  :  /   '  | |    
 //'  :  | \  \ ,' |  | '    |  | :    
 //|  |  '  '--'   ;  : |    '  : |_  
 //|  :  :         |  , ;    |  | '.| 
 //|  | ,'          ---'     ;  :   ; 
 //`--''                     |  ,  /  
//                            --`-'   
//                                               

//@ariannater

// Waves-10PRINT by Arianna 
// 2021 © Arianna @ariannater, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 

// Educational purposes, MIT License, 2021, San Marino
// original license: Educational purposes, MIT License, 2019, Crespina IT

var w, h;
var x = 0;
var y = 0;
var z = 0;
var size = 20;
var noisex = 0;
var noisey = 0;
var noisez = 0;
var caso;


function setup() {
  createCanvas(w = windowWidth, h = windowHeight, WEBGL);
  background(0);
  
}

function draw() {
  //lights();
push();
  translate(200, -h / 2, -h / 2 +200)
  rotateY(PI)
  caso = random(1.5);
  if (caso < 0.2) {
    noStroke();
    fill(255);
    ellipse(x, y, size, size);
  } 
    
  else if (caso > 1) {
    strokeWeight(0.5); 
    stroke(255);

    push();
     translate(x, y+30, 0);
     ambientMaterial(250);
     box(20, 20, random(10,25));
   pop();
 }
    
  x += size;
  z += size;
  noisex += 0.3;

  if (x > w / 2) {
    x = 0;
    y += size;
    noisex = 0;
    noisey += 0.3;
    z += size;
    noisez += 0.05
  }
  
 if(y > w/1+25){
    noLoop();
  }
}