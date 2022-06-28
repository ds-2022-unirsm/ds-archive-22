
                                                   
//# #####  ###### #    # ###### #####   ####    ##   
//# #    # #      #    # #      #    # #       #  #  
//# #    # #####  #    # #####  #    #  ####  #    # 
//# #####  #      #    # #      #####       # ###### 
//# #   #  #       #  #  #      #   #  #    # #    # 
//# #    # ######   ##   ###### #    #  ####  #    # 


// -
// DA VICINO NESSUNO E' NORMALE 0.1 by IreneBacherotti [normale, diverso]
// 2022 © IreneBacherotti. @irebache Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —



let noiseScale=0.4;
let vx=0;
let vy=0;
let tempo=0;




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10);
  
  
  
  
  vy=0;
  
 for (let y=5; y < height; y+=15) {
  vx=0;
  for (let x=5; x < width; x+=60) {
     vx=vx+1; 
    let noiseVal = noise(vx, vy, tempo);
    fill(60);
         text('NORMALE', x, y);
   
   
    if (noiseVal<0.5){
      
      fill(255,255,15);
       text('DIVERSO', x, y);
      }
    
     
      
     

    }
     vy=vy+0.2;
    }
  tempo+=0.005;
}
